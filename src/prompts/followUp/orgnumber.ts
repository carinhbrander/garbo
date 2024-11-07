import { z } from 'zod'

const schema = z.object({
  orgnumber: z.string(),
})

const prompt = `
Extract the company's swedish organisational number (organisationsnummer, orgnr). If no orgnumber is mentioned, set orgnumber to empty string.

Example:
\`\`\`json
{
  "orgnumber": "556551-6928"
}
\`\`\`
`

export default { schema, prompt }
