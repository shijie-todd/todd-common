// 处理为 number
const preProcessNum = (n: any): number => (isNaN(n) ? 0 : Number(n))

// 四舍五入
const getRoundPercent = (arr: number[], precision = 2): number[] => {
  if (!arr.length) return []
  const total = arr.reduce((acc, cur) => acc + preProcessNum(cur), 0)
  if (total === 0) return new Array(arr.length).fill(0)
  return arr.map((n) =>
    Number(((100 * preProcessNum(n)) / total).toFixed(precision))
  )
}

// 最大余额法
const getMaxBalancePercent = (arr: number[], precision = 2): number[] => {
  if (!arr.length) return []
  const total = arr.reduce((acc, cur) => acc + preProcessNum(cur), 0)
  if (total === 0) return new Array(arr.length).fill(0)

  const digits = Math.pow(10, preProcessNum(precision))
  const targetSeats = digits * 100
  const votesPerQuota = arr.map((a) => (preProcessNum(a) * targetSeats) / total)
  const seats = votesPerQuota.map(Math.floor)
  let currentSeats = seats.reduce((acc, cur) => acc + cur)
  const remainder = votesPerQuota.map((v, i) => v - seats[i])
  while (currentSeats < targetSeats) {
    let maxRemainder = Number.NEGATIVE_INFINITY
    let index = -1
    for (let i = 0; i < remainder.length; i++) {
      if (remainder[i] > maxRemainder) {
        maxRemainder = remainder[i]
        index = i
      }
    }
    seats[index]++
    remainder[index] = 0
    currentSeats++
  }
  return seats.map((s) => s / digits)
}

const tArray = {
  getRoundPercent,
  getMaxBalancePercent
}
export { getRoundPercent, getMaxBalancePercent }
export default tArray
