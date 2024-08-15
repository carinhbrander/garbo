import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Scope2AvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    biogenic: z.lazy(() => SortOrderSchema).optional(),
    mb: z.lazy(() => SortOrderSchema).optional(),
    lb: z.lazy(() => SortOrderSchema).optional(),
    metadataId: z.lazy(() => SortOrderSchema).optional(),
    emissionsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const Scope2AvgOrderByAggregateInputObjectSchema = Schema