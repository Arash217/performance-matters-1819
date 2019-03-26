const Router = require('koa-router');
const controllers = require('../controllers');

const router = new Router();

/* First route is for redirection */
router.get('/', async ctx => await ctx.redirect('/countries'));
router.get('/countries', controllers.countries);
router.post('/filter', controllers.filter);
router.get('/countries/:code', controllers.country);

module.exports = router;