
const downloadViaAnchor = (url: string, fileName = '') => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', url)
  fileName.trim() && anchor.setAttribute('download', fileName.trim())
  anchor.setAttribute('referrerpolicy', 'no-referrer')
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

const $ = {
  downloadViaAnchor,
}
export {
  downloadViaAnchor,
}
export default $