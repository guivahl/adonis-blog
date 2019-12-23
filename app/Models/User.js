'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Post = use('Post')
const uuid = require('uuid/v4')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
      userInstance.id = uuid()
    })

    this.addHook('beforeDelete', async (userInstance) => {
      await Post
        .query()
        .where('user_id', userInstance.id)
        .delete()
    })
  }

  tokens () {
    return this.hasMany('Token')
  }

  posts () {
    return this.hasMany('Post')
  }

  roles () {
    return this.belongsToMany('Role')
  }
}

module.exports = User
