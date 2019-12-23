
const Post = use('Post')

class PostController {
  async index () {
    const posts = await Post.all()

    return posts
  }

  async show ({ params }) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  async store ({ request }) {
    const data = request.only(['title', 'description', 'user_id'])

    const post = await Post.create(data)

    return post
  }

  async update ({ request, params }) {
    const post = await Post.findOrFail(params.id)

    const data = request.only(['title', 'description', 'user_id'])

    await post.merge(data)

    return post
  }

  async destroy ({ params }) {
    const post = await Post.findOrFail(params.id)

    await post.delete()

    return { id: params.id }
  }
}

module.exports = PostController
