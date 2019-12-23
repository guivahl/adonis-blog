'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const uuid = require('uuid/v4')

class Post extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (postInstance) => {
      postInstance.id = uuid()
    })
  }

  user () {
    return this.belongsTo('User')
  }
}

module.exports = Post
