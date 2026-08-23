// auth/sessionStorage.js

import fs from 'fs'

export async function saveSessionStorage(page) {
  const sessionStorage = await page.evaluate(() => {
    return JSON.stringify(sessionStorage)
  })

  fs.writeFileSync(
    'auth/sessionStorage.json',
    sessionStorage
  )
}