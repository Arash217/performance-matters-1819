const apiProxy = require('../services/api-proxy');
const filterService = require('../services/filter');

const countries = async ctx => {
    const {order = 'asc', search = ''} = ctx.query;
    let countries = await apiProxy.getAll();

    if (order) {
        countries = filterService.sort(countries, order);
    }

    if (search) {
        countries = filterService.search(countries, search);
    }

    await ctx.render('countries', {
        countries,
        search,
        order,
        ascending: order === 'asc'
    });
};

const filter = async ctx => {
    const {body} = ctx.request;
    const {order = 'asc', search = ''} = JSON.parse(body);

    let countries = await apiProxy.getAll();

    if (order) {
        countries = filterService.sort(countries, order);
    }

    if (search) {
        countries = filterService.search(countries, search);
    }

    await ctx.render('filter', {
        countries
    });
};

const country = async ctx => {
    const {code} = ctx.params;
    const country = await apiProxy.get(code);

    await ctx.render('country', {
        country
    });
};

module.exports = {
    countries,
    country,
    filter
};