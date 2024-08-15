import { z } from 'zod'
import { Scope2UpdateWithoutEmissionsInputObjectSchema } from './Scope2UpdateWithoutEmissionsInput.schema'
import { Scope2UncheckedUpdateWithoutEmissionsInputObjectSchema } from './Scope2UncheckedUpdateWithoutEmissionsInput.schema'
import { Scope2CreateWithoutEmissionsInputObjectSchema } from './Scope2CreateWithoutEmissionsInput.schema'
import { Scope2UncheckedCreateWithoutEmissionsInputObjectSchema } from './Scope2UncheckedCreateWithoutEmissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Scope2UpsertWithoutEmissionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => Scope2UpdateWithoutEmissionsInputObjectSchema),
      z.lazy(() => Scope2UncheckedUpdateWithoutEmissionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => Scope2CreateWithoutEmissionsInputObjectSchema),
      z.lazy(() => Scope2UncheckedCreateWithoutEmissionsInputObjectSchema),
    ]),
  })
  .strict()

export const Scope2UpsertWithoutEmissionsInputObjectSchema = Schema
