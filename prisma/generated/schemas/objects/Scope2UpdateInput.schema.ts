import { z } from 'zod'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { EmissionsUpdateOneRequiredWithoutScope2NestedInputObjectSchema } from './EmissionsUpdateOneRequiredWithoutScope2NestedInput.schema'
import { MetadataUpdateOneRequiredWithoutScope2NestedInputObjectSchema } from './MetadataUpdateOneRequiredWithoutScope2NestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Scope2UpdateInput> = z
  .object({
    value: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    biogenic: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    unit: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mb: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    lb: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    baseYear: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    emissions: z
      .lazy(
        () => EmissionsUpdateOneRequiredWithoutScope2NestedInputObjectSchema
      )
      .optional(),
    metadata: z
      .lazy(() => MetadataUpdateOneRequiredWithoutScope2NestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const Scope2UpdateInputObjectSchema = Schema