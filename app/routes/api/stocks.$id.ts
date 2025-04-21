import { faker } from '@faker-js/faker'
import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/stocks/$id')({
  GET: async ({ params }) => {
    return json({
      id: `${params.id}`,
      amount: faker.number.int({ min: 0, max: 10 }),
    })
  },
})
