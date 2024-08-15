import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Scope3MaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    biogenic: z.lazy(() => SortOrderSchema).optional(),
    unit: z.lazy(() => SortOrderSchema).optional(),
    baseYear: z.lazy(() => SortOrderSchema).optional(),
    metadataId: z.lazy(() => SortOrderSchema).optional(),
    emissionsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const Scope3MaxOrderByAggregateInputObjectSchema = Schema