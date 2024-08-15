import { z } from 'zod'
import { GoalUncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './GoalUncheckedCreateNestedManyWithoutMetadataInput.schema'
import { InitiativeUncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './InitiativeUncheckedCreateNestedManyWithoutMetadataInput.schema'
import { EconomyUncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './EconomyUncheckedCreateNestedManyWithoutMetadataInput.schema'
import { Scope1UncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './Scope1UncheckedCreateNestedManyWithoutMetadataInput.schema'
import { Scope3UncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './Scope3UncheckedCreateNestedManyWithoutMetadataInput.schema'
import { Scope3CategoryUncheckedCreateNestedManyWithoutMetadataInputObjectSchema } from './Scope3CategoryUncheckedCreateNestedManyWithoutMetadataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MetadataUncheckedCreateWithoutScope2Input> = z
  .object({
    id: z.number().optional(),
    url: z.string().optional().nullable(),
    comment: z.string().optional().nullable(),
    userId: z.number(),
    lastUpdated: z.coerce.date().optional(),
    goal: z
      .lazy(() => GoalUncheckedCreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    initiative: z
      .lazy(
        () =>
          InitiativeUncheckedCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
    economy: z
      .lazy(
        () => EconomyUncheckedCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
    scope1: z
      .lazy(
        () => Scope1UncheckedCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
    scope3: z
      .lazy(
        () => Scope3UncheckedCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
    scope3Category: z
      .lazy(
        () =>
          Scope3CategoryUncheckedCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const MetadataUncheckedCreateWithoutScope2InputObjectSchema = Schema
