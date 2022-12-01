import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruse Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princes Diana',
        },
      ])
    )
  }),
]
