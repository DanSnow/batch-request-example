import { faker } from '@faker-js/faker'
import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { Array } from 'effect'

export const APIRoute = createAPIFileRoute('/api/products')({
  GET: () => {
    return json({
      products: Array.makeBy(10, (index) => ({
        id: `${index + 1}`,
        name: faker.lorem.word(),
      })),
    })
  },
})
