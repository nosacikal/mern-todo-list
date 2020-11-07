const Todo = require('./model')
const User = require('../users/model')

const index = async (req, res, next) => {
  try {
    const { _id } = req.user

    const todo = await Todo.find({ user: _id })
      .populate('user')
      .select('-__v -createdAt -updatedAt')

    return res.json(todo)
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      })
    }

    next(error)
  }
}

const store = async (req, res, next) => {
  try {
    const payload = req.body

    const { _id } = req.user

    const user = await User.findOne({ _id })

    const todo = new Todo({ ...payload, user: user._id })
    await todo.save()

    return res.json(todo)
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      })
    }

    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const payload = req.body

    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, payload, {
      new: true,
      runValidators: true,
    })

    return res.json(todo)
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      })
    }

    next(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    const id = req.params.id

    const todo = await Todo.findOneAndDelete({ _id: id })

    return res.json(todo)
  } catch (error) {
    if (error && error.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      })
    }

    next(error)
  }
}

module.exports = {
  index,
  store,
  update,
  destroy,
}
