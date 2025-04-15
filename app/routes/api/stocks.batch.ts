import { faker } from '@faker-js/faker'
import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { z } from 'zod'

const BatchRequestSchema = z.object({
  stocks: z.array(z.string()),
})

export const APIRoute = createAPIFileRoute('/api/stocks/batch')({
  POST: async ({ request }) => {
    const body = await request.json()
    const parsed = BatchRequestSchema.safeParse(body)
    if (parsed.success) {
      return json({
        stocks: parsed.data.stocks.map((stock) => ({
          id: stock,
          amount: faker.number.int({ min: 0, max: 10 }),
        })),
      })
    }
    return json(
      {
        message: 'Invalid request body',
        errors: parsed.error.errors,
      },
      { status: 400 },
    )
  },
})
