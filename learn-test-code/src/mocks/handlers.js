import { rest } from 'msw'

export const host = 'http://localhost:5000'

export const handlers = [
  rest.get(`${host}/products`, (req, res, ctx) => {

    return res(
      ctx.json([
        {
          "name": "America",
          "imagePath": "/images/america.jpg",
        },
        {
          "name": "England",
          "imagePath": "/images/england.jpg",
        }
      ])
    )
  }),

  rest.get(`${host}/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        }
      ])
    )
  })
]