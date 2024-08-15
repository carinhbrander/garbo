import { z } from 'zod'
import { GoalCreateNestedManyWithoutMetadataInputObjectSchema } from './GoalCreateNestedManyWithoutMetadataInput.schema'
import { EconomyCreateNestedManyWithoutMetadataInputObjectSchema } from './EconomyCreateNestedManyWithoutMetadataInput.schema'
import { Scope1CreateNestedManyWithoutMetadataInputObjectSchema } from './Scope1CreateNestedManyWithoutMetadataInput.schema'
import { Scope2CreateNestedManyWithoutMetadataInputObjectSchema } from './Scope2CreateNestedManyWithoutMetadataInput.schema'
import { Scope3CreateNestedManyWithoutMetadataInputObjectSchema } from './Scope3CreateNestedManyWithoutMetadataInput.schema'
import { Scope3CategoryCreateNestedManyWithoutMetadataInputObjectSchema } from './Scope3CategoryCreateNestedManyWithoutMetadataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MetadataCreateWithoutInitiativeInput> = z
  .object({
    url: z.string().optional().nullable(),
    comment: z.string().optional().nullable(),
    userId: z.number(),
    lastUpdated: z.coerce.date().optional(),
    goal: z
      .lazy(() => GoalCreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    economy: z
      .lazy(() => EconomyCreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    scope1: z
      .lazy(() => Scope1CreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    scope2: z
      .lazy(() => Scope2CreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    scope3: z
      .lazy(() => Scope3CreateNestedManyWithoutMetadataInputObjectSchema)
      .optional(),
    scope3Category: z
      .lazy(
        () => Scope3CategoryCreateNestedManyWithoutMetadataInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const MetadataCreateWithoutInitiativeInputObjectSchema = Schema
