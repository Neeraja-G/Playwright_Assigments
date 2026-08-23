// auth/loadSessionStorage.js

import fs from 'fs'

export async function loadSessionStorage(page) {
  const sessionStorage = fs.readFileSync(
    'auth/sessionStorage.json',
    'utf-8'
  )

  await page.addInitScript(storage => {
    const data = JSON.parse(storage)

    for (const [key, value] of Object.entries(data)) {
      window.sessionStorage.setItem(key, value)
    }
  }, sessionStorage)
}