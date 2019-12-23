'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleUserSchema extends Schema {
  up () {
    this.create('role_user', (table) => {
      table.increments()
      table.uuid('user_id').references('id').inTable('users').onDelete('cascade')
      table.uuid('role_id').references('id').inTable('roles').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_user')
  }
}

module.exports = RoleUserSchema
