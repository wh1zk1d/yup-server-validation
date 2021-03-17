const yup = require('yup')

const createBookSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  genre: yup.string().required(),
  pages: yup.number().positive().integer().required(),
})

module.exports = createBookSchema
