import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EconomyCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    turnover: z.literal(true).optional(),
    unit: z.literal(true).optional(),
    employees: z.literal(true).optional(),
    metadataId: z.literal(true).optional(),
    fiscalYearId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const EconomyCountAggregateInputObjectSchema = Schema
