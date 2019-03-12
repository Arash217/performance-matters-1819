const apiProxy = require('./api-proxy');
const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    console.log('test countries');
    const countries = await apiProxy.getAll();
    await ctx.render('countries', {
        countries
    });
});

router.get('/countries/:code', async ctx => {
    console.log(ctx.params.code);
    ctx.body = 'test!';
});

router.get('*', async ctx => {
    await ctx.render('error', {
        errorMessage: 'Page not found'
    });
});

module.exports = router;