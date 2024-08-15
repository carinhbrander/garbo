import { z } from 'zod'
import { EconomyUncheckedCreateNestedOneWithoutFiscalYearInputObjectSchema } from './EconomyUncheckedCreateNestedOneWithoutFiscalYearInput.schema'
import { EmissionsUncheckedCreateNestedOneWithoutFiscalYearInputObjectSchema } from './EmissionsUncheckedCreateNestedOneWithoutFiscalYearInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FiscalYearUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    startYear: z.number(),
    endYear: z.number().optional().nullable(),
    startMonth: z.string().optional().nullable(),
    companyId: z.number(),
    emissionsId: z.number(),
    economy: z
      .lazy(
        () => EconomyUncheckedCreateNestedOneWithoutFiscalYearInputObjectSchema
      )
      .optional(),
    emissions: z
      .lazy(
        () =>
          EmissionsUncheckedCreateNestedOneWithoutFiscalYearInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const FiscalYearUncheckedCreateInputObjectSchema = Schema