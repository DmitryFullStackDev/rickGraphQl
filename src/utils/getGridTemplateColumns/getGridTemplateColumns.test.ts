import { getGridTemplateColumns } from './getGridTemplateColumns'

describe('getGridTemplateColumns', () => {
  test('test1', () => {
    expect(getGridTemplateColumns(400)).toBe('1fr')
  })

  test('test2', () => {
    expect(getGridTemplateColumns(800)).toBe('1fr 1fr')
  })

  test('test3', () => {
    expect(getGridTemplateColumns(100)).toBe('')
  })
})
