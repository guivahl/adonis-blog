const User = use('User')

class UserController {
  async index () {
    const users = await User
      .query()
      .with('roles')
      .with('posts')
      .orderBy('updated_at', 'desc')
      .fetch()

    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async store ({ request }) {
    const { role_id, ...data } = request.only(['username', 'email', 'password', 'role_id'])

    const user = await User.create(data)

    await user.roles().attach(role_id)

    return user
  }

  async update ({ request, params }) {
    const user = await User.findOrFail(params.id)

    const data = request.only(['username', 'email'])

    await user.merge(data)

    return user
  }

  async login ({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const { token } = await auth.attempt(email, password)

    return { token: token }
  }

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.roles().detach()

    await user.delete()

    return { id: params.id }
  }
}

module.exports = UserController
