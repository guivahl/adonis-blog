const Role = use('Role')

class RoleController {
  async index () {
    const roles = await Role.all()

    return roles
  }

  async show ({ params }) {
    const role = await Role.findOrFail(params.id)

    return role
  }

  async store ({ request }) {
    const data = request.only(['name', 'slug', 'description'])

    const role = await Role.create(data)

    return role
  }

  async update ({ request, params }) {
    const role = await Role.findOrFail(params.id)

    const data = request.only(['name', 'slug', 'description'])

    await role.merge(data)

    return role
  }

  async destroy ({ params }) {
    const role = await Role.findOrFail(params.id)

    await role.users().detach()

    await role.delete()

    return role
  }
}

module.exports = RoleController
