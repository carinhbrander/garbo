import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { Scope1UncheckedUpdateOneWithoutEmissionsNestedInputObjectSchema } from './Scope1UncheckedUpdateOneWithoutEmissionsNestedInput.schema'
import { Scope3UncheckedUpdateOneWithoutEmissionsNestedInputObjectSchema } from './Scope3UncheckedUpdateOneWithoutEmissionsNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EmissionsUncheckedUpdateWithoutScope2Input> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    fiscalYearId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    scope1Id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    scope2Id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    scope3Id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    scope1: z
      .lazy(
        () => Scope1UncheckedUpdateOneWithoutEmissionsNestedInputObjectSchema
      )
      .optional(),
    scope3: z
      .lazy(
        () => Scope3UncheckedUpdateOneWithoutEmissionsNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const EmissionsUncheckedUpdateWithoutScope2InputObjectSchema = Schema
