'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const uuid = require('uuid/v4')

class Role extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (roleInstance) => {
      roleInstance.id = uuid()
    })
  }

  users () {
    return this.belongsToMany('User')
  }
}

module.exports = Role
