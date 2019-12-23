/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.resource('roles', 'RoleController')
  .only(['index', 'show', 'store', 'update', 'destroy'])
  .middleware(['auth'])
