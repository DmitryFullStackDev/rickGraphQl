export const getGridTemplateColumns = (width: number) => {
  const number = Math.floor(width / 354)
  const gridTemplateColumnsArr = []

  for (let i = 0; i < number; i++) {
    gridTemplateColumnsArr.push('1fr')
  }

  return gridTemplateColumnsArr.join(' ')
}
