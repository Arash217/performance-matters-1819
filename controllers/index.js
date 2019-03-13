const apiProxy = require('../services/api-proxy');
const filter = require('../services/filter');

const countries = async ctx => {
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
};

const country = async ctx => {
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
};

module.exports = {
    countries,
    country
};