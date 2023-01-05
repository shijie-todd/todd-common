const TIME_UNIT = 1000

const getMillisecondsFromStamp = (timeStamp: number): number => {
  const len = String(timeStamp).length
  switch (len) {
  case 10:
    return timeStamp * TIME_UNIT
  case 16:
    return Math.floor(timeStamp / TIME_UNIT)
  case 13:
  default:
    return timeStamp
  }
}

const YYYY = (date: Date): string => date.getFullYear().toString()
const YY = (date: Date): string => YYYY(date).slice(2)
const M = (date: Date): string => (date.getMonth() + 1).toString()
const MM = (date: Date): string => M(date).padStart(2, '0')
const D = (date: Date): string => date.getDate().toString()
const DD = (date: Date): string => D(date).padStart(2, '0')
const H = (date: Date): string => date.getHours().toString()
const HH = (date: Date): string => H(date).padStart(2, '0')
const h = (date: Date): string => (Number(H(date)) % 12).toString()
const hh = (date: Date): string => h(date).padStart(2, '0')
const m = (date: Date): string => date.getMinutes().toString()
const mm = (date: Date): string => m(date).padStart(2, '0')
const s = (date: Date): string => date.getSeconds().toString()
const ss = (date: Date): string => s(date).padStart(2, '0')

const getFormattedTime = (
  timeStamp: number | string,
  format: string,
): string => {
  const milliseconds = getMillisecondsFromStamp(Number(timeStamp))
  const date = new Date(milliseconds)

  return format
    .replace('YYYY', YYYY(date))
    .replace('YY', YY(date))
    .replace('MM', MM(date))
    .replace('M', M(date))
    .replace('DD', DD(date))
    .replace('D', D(date))
    .replace('HH', HH(date))
    .replace('H', H(date))
    .replace('hh', hh(date))
    .replace('h', h(date))
    .replace('mm', mm(date))
    .replace('m', m(date))
    .replace('ss', ss(date))
    .replace('s', s(date))
}

const getMMDDHHmm = (timeStamp: number | string): string =>
  getFormattedTime(timeStamp, 'MM-DD HH:mm')

const getYYYYMMDDHHmmss = (timeStamp: number | string): string =>
  getFormattedTime(timeStamp, 'YYYY-MM-DD HH:mm:ss')

const getYYYYMMDDHHmm = (timeStamp: number | string): string =>
  getFormattedTime(timeStamp, 'YYYY-MM-DD HH:mm')

const getYYYYMMDD = (timeStamp: number | string): string =>
  getFormattedTime(timeStamp, 'YYYY-MM-DD')

const day2second = (day: number): number => {
  return day * 24 * 60 * 60
}

const second2day = (second: number): number => {
  return second / 60 / 60 / 24
}

const tTime = {
  getFormattedTime,
  getYYYYMMDDHHmmss,
  getYYYYMMDDHHmm,
  getMMDDHHmm,
  getYYYYMMDD,
  day2second,
  second2day,
}

export {
  getFormattedTime,
  getYYYYMMDDHHmmss,
  getYYYYMMDDHHmm,
  getMMDDHHmm,
  getYYYYMMDD,
  day2second,
  second2day,
}
export default tTime
