import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'Hello world' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))
