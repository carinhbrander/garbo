import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { InitiativeUpdateManyWithoutCompanyNestedInputObjectSchema } from './InitiativeUpdateManyWithoutCompanyNestedInput.schema'
import { GoalUpdateManyWithoutCompanyNestedInputObjectSchema } from './GoalUpdateManyWithoutCompanyNestedInput.schema'
import { IndustryGicsUpdateOneWithoutCompaniesNestedInputObjectSchema } from './IndustryGicsUpdateOneWithoutCompaniesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CompanyUpdateWithoutFiscalYearsInput> = z
  .object({
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
    initiatives: z
      .lazy(() => InitiativeUpdateManyWithoutCompanyNestedInputObjectSchema)
      .optional(),
    goals: z
      .lazy(() => GoalUpdateManyWithoutCompanyNestedInputObjectSchema)
      .optional(),
    industryGics: z
      .lazy(() => IndustryGicsUpdateOneWithoutCompaniesNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CompanyUpdateWithoutFiscalYearsInputObjectSchema = Schema