const apiProxy = require('./api-proxy');
const Router = require('koa-router');
const filter = require('./filter');

const router = new Router();

router.get('/', async ctx => {
    await ctx.redirect('/countries');
});

router.get('/countries', async ctx => {
    const {order = 'asc', search = ''} = ctx.query;
    let countries = await apiProxy.getAll();

    if (order) {
        countries = filter.sort(countries, order);
    }

    if (search) {
        countries = filter.search(countries, search);
    }

    await ctx.render('countries', {
        countries,
        search,
        order,
        ascending: order === 'asc'
    });
});

router.get('/countries/:code', async ctx => {
    try {
        const {code} = ctx.params;
        const country = await apiProxy.get(code);

        await ctx.render('country', {
            country
        });
    } catch (e) {
        if (e.status === 404) {
            await ctx.render('error', {
                errorMessage: 'Country not found'
            });
        }
    }
});

module.exports = router;