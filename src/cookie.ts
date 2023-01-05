const setCookie = (key: string, value: string, maxAge?: number) => {
  let cookie = `${key}=${encodeURIComponent(value)};secure`
  if (maxAge !== undefined && maxAge >= 0) {
    cookie += `;max-age=${maxAge}`
  }
  document.cookie = cookie
}

const getCookieObj = (): Record<string, string> => {
  const cookies = document.cookie
  const cookieArr = cookies.split(';').map(s => s.trim())
  const obj: Record<string, string> = {}
  cookieArr.forEach(c => {
    const [key, value] = c.split('=')
    if (key && value) {
      obj[key] = decodeURIComponent(value)
    }
  })
  return obj
}

const getCookie = (key: string): string | undefined => {
  const obj = getCookieObj()
  return obj[key]
}

const deleteCookie = (key: string) => {
  setCookie(key, '', 0)
}

const tCookie = { setCookie, getCookie, deleteCookie }
export { setCookie, getCookie, deleteCookie }
export default tCookie