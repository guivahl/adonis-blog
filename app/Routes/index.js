/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')
const users = require('./users-router')
const roles = require('./roles-router')
const posts = require('./posts-router')

Route.on(users)
Route.on(roles)
Route.on(posts)
