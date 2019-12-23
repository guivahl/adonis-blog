/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.resource('users', 'UserController')
  .only(['index', 'show', 'store', 'update', 'destroy'])
  .middleware(['auth'])

Route.post('users/login', 'UserController.login').middleware(['guest'])
