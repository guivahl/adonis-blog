'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.uuid('user_id').references('id').inTable('users').notNullable()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
