const TIME_UNIT = 1000

// microsecond  millisecond second
const micro2milli = (micro: number) => Math.round(micro / TIME_UNIT)
const micro2second = (micro: number) =>
  Math.round(micro / TIME_UNIT / TIME_UNIT)
const milli2micro = (milli: number) => Math.round(milli * TIME_UNIT)
const milli2second = (milli: number) => Math.round(milli / TIME_UNIT)
const second2milli = (second: number) => Math.round(second * TIME_UNIT)
const second2micro = (second: number) =>
  Math.round(second * TIME_UNIT * TIME_UNIT)

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
  format: string
): string => {
  const milliseconds = Number(timeStamp)
  const date = new Date(milliseconds)

  return format
    .replace(/Y{4}/g, YYYY(date))
    .replace(/Y{2}/g, YY(date))
    .replace(/M{2}/g, MM(date))
    .replace(/M/g, M(date))
    .replace(/D{2}/g, DD(date))
    .replace(/D/g, D(date))
    .replace(/H{2}/g, HH(date))
    .replace(/H/g, H(date))
    .replace(/h{2}/g, hh(date))
    .replace(/h/g, h(date))
    .replace(/m{2}/g, mm(date))
    .replace(/m/g, m(date))
    .replace(/s{2}/g, ss(date))
    .replace(/s/g, s(date))
}

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
  micro2milli,
  micro2second,
  milli2micro,
  milli2second,
  second2milli,
  second2micro,
  getFormattedTime,
  getYYYYMMDDHHmmss,
  getYYYYMMDDHHmm,
  getYYYYMMDD,
  day2second,
  second2day
}

export {
  micro2milli,
  micro2second,
  milli2micro,
  milli2second,
  second2milli,
  second2micro,
  getFormattedTime,
  getYYYYMMDDHHmmss,
  getYYYYMMDDHHmm,
  getYYYYMMDD,
  day2second,
  second2day
}
export default tTime
