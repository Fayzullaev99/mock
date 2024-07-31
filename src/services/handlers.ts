import { http, HttpResponse } from 'msw'
import { IUserData } from '../assets/interfaces/index.js';

export const handlers = [
  http.get('/api/user', ({ params }) => {
    const userData = localStorage.getItem('userData');
    if (!userData) return HttpResponse.json({ message: "User data not found" }, { status: 401 })
    const user: IUserData = JSON.parse(userData)
    return HttpResponse.json({
      ...user,
      avatar: 'https://avatars.githubusercontent.com/u/744487?v=4'
    })
  }),
  http.post('/api/user', async ({ request }) => {
    const authToken = request.headers.get("Authorization")
    if (!authToken) return HttpResponse.json({ message: "Token not Found" }, { status: 401 });
    const response = await request.json()
    const user: IUserData = { ...response, avatar: 'https://avatars.githubusercontent.com/u/744487?v=4' }
    return HttpResponse.json(user, { status: 200 });
  })
]

