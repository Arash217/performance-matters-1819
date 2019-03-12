const fs = require('fs');
const path = require('path');
const http2 = require('http2');
const hbs = require('koa-hbs');
const serve = require('koa-static');
const compress = require('koa-compress');
const Koa = require('koa');
const router = require('./routes');

const cert = {
    key: fs.readFileSync(path.join(__dirname, './certificate/privateKey.key')),
    cert: fs.readFileSync(path.join(__dirname, './certificate/certificate.crt'))
};

const app = new Koa();

app.use(serve(path.join(__dirname, '/public')));
app.use(hbs.middleware({viewPath: path.join(__dirname, '/views')}));
app.use(compress({
    filter(content_type) {
        return /text/i.test(content_type)
    },
    threshold: 1024,
    flush: require('zlib').Z_SYNC_FLUSH
}));

app.use(async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            await ctx.render('error', {
                errorMessage: 'Page not found'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = http2.createSecureServer(cert, app.callback());

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`App started on port ${port}`)
});