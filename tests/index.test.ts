import { sum } from '../src/index'

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(sum('')).toBe(0)
  })

  test('1,2,3,4,5 string should result in 12', () => {
    expect(sum('1,2,4,5')).toBe(12)
  })

  test('1,2,4,5,-10 string should result in 2', () => {
    expect(sum('1,2,4,5,-10')).toBe(2)
  })
})
