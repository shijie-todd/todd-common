const base64 = (e: any) => btoa(encodeURIComponent(JSON.stringify(e)))

const debase64 = (s: string) => JSON.parse(decodeURIComponent(atob(s)))

const tEncryption = {
  base64,
  debase64,
}
export {
  base64,
  debase64,
}
export default tEncryption