import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EconomyMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    turnover: z.lazy(() => SortOrderSchema).optional(),
    unit: z.lazy(() => SortOrderSchema).optional(),
    employees: z.lazy(() => SortOrderSchema).optional(),
    metadataId: z.lazy(() => SortOrderSchema).optional(),
    fiscalYearId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const EconomyMaxOrderByAggregateInputObjectSchema = Schema
