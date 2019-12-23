/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')
const routes = require('../app/Routes/index')

Route.on(routes)
