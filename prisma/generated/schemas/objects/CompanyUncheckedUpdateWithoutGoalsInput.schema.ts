import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { FiscalYearUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema } from './FiscalYearUncheckedUpdateManyWithoutCompanyNestedInput.schema'
import { InitiativeUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema } from './InitiativeUncheckedUpdateManyWithoutCompanyNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutGoalsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    wikidataId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    industryGicsId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fiscalYears: z
      .lazy(
        () => FiscalYearUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema
      )
      .optional(),
    initiatives: z
      .lazy(
        () => InitiativeUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const CompanyUncheckedUpdateWithoutGoalsInputObjectSchema = Schema
