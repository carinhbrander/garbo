import { z } from 'zod'
import { FiscalYearUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './FiscalYearUncheckedCreateNestedManyWithoutCompanyInput.schema'
import { InitiativeUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './InitiativeUncheckedCreateNestedManyWithoutCompanyInput.schema'
import { GoalUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './GoalUncheckedCreateNestedManyWithoutCompanyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutIndustryGicsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      description: z.string(),
      wikidataId: z.string().optional().nullable(),
      url: z.string(),
      fiscalYears: z
        .lazy(
          () =>
            FiscalYearUncheckedCreateNestedManyWithoutCompanyInputObjectSchema
        )
        .optional(),
      initiatives: z
        .lazy(
          () =>
            InitiativeUncheckedCreateNestedManyWithoutCompanyInputObjectSchema
        )
        .optional(),
      goals: z
        .lazy(
          () => GoalUncheckedCreateNestedManyWithoutCompanyInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const CompanyUncheckedCreateWithoutIndustryGicsInputObjectSchema = Schema