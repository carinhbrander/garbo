import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { EconomyUncheckedUpdateOneWithoutFiscalYearNestedInputObjectSchema } from './EconomyUncheckedUpdateOneWithoutFiscalYearNestedInput.schema'
import { EmissionsUncheckedUpdateOneWithoutFiscalYearNestedInputObjectSchema } from './EmissionsUncheckedUpdateOneWithoutFiscalYearNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FiscalYearUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    startYear: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    endYear: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    startMonth: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    companyId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    emissionsId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    economy: z
      .lazy(
        () => EconomyUncheckedUpdateOneWithoutFiscalYearNestedInputObjectSchema
      )
      .optional(),
    emissions: z
      .lazy(
        () =>
          EmissionsUncheckedUpdateOneWithoutFiscalYearNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const FiscalYearUncheckedUpdateInputObjectSchema = Schema
