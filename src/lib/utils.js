

export const getColors = async () => {
  return await fetch('/colors.json')
    .then(r => r.json())
}
