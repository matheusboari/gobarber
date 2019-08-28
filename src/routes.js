import { Router } from 'express'
import User from './app/models/User'

const routes = new Router()

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Matheus Boari',
    email: 'matheusboari@gmail.com',
    password_hash: '1231231232',
  })

  return res.json(user)
})

export default routes
