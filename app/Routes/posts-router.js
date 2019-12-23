/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.resource('posts', 'PostController')
  .only(['index', 'show', 'store', 'update', 'destroy'])
  .middleware(['auth'])
