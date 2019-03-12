const apiProxy = require('./api-proxy');
const Router = require('koa-router');
const filter = require('./filter');

const router = new Router();

router.get('/', async ctx => {
    const countries = await apiProxy.getAll();

    await ctx.render('countries', {
        countries
    });
});

router.get('/sort/:order/search/:keyword?', async ctx => {
    const {keyword = '', order} = ctx.params;

    const countries = await apiProxy.getAll();
    const foundCountries = filter.search(countries, keyword);
    const sortedCountries = filter.sort(foundCountries, order);

    await ctx.render('countries', {
        countries: sortedCountries
    });
});

router.get('/countries/:code', async ctx => {
    const {code} = ctx.params;
    const country = await apiProxy.get(code);

    await ctx.render('country', {
        country
    });
});

module.exports = router;