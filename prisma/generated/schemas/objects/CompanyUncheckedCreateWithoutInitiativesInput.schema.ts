import { z } from 'zod'
import { FiscalYearUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './FiscalYearUncheckedCreateNestedManyWithoutCompanyInput.schema'
import { GoalUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './GoalUncheckedCreateNestedManyWithoutCompanyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutInitiativesInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      description: z.string(),
      wikidataId: z.string().optional().nullable(),
      url: z.string(),
      industryGicsId: z.number().optional().nullable(),
      fiscalYears: z
        .lazy(
          () =>
            FiscalYearUncheckedCreateNestedManyWithoutCompanyInputObjectSchema
        )
        .optional(),
      goals: z
        .lazy(
          () => GoalUncheckedCreateNestedManyWithoutCompanyInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const CompanyUncheckedCreateWithoutInitiativesInputObjectSchema = Schema