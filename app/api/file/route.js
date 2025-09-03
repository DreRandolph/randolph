import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), 'app/assets', 'CollegeResume.pdf')
  )

  const headers = new Headers()
  headers.append(
    'Content-Disposition',
    'attachment; filename="CollegeResume.pdf"'
  )
  headers.append('Content-Type', 'pdf/application')

  return new Response(buffer, {
    headers,
  })
}
