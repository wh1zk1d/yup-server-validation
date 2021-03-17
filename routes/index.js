const router = require('express').Router()

const CreateBookSchema = require('../validations/createBook.schema')
const isEmpty = require('../utils/isEmpty')

router.get('/', (req, res) => {
  res.send('foo')
})

router.post('/add', async (req, res) => {
  const data = req.body

  // Check if there is any data to validate
  // If not, return an error
  if (isEmpty(data)) {
    return res.status(400).json({ success: false, msg: 'missing body' })
  }

  // Validate data
  CreateBookSchema.validate(data)
    .then(() => {
      res.json({ success: true, msg: 'added book' })
    })
    .catch(error => {
      res.json({ success: false, msg: 'invalid data' })
    })
})

module.exports = router
