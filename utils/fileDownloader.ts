export function fileDownloader(obj: object, fileName: string): void {
  const json: string = JSON.stringify(obj, null, 2)
  const blob: Blob = new Blob([json], { type: 'application/json' })
  const url: string = URL.createObjectURL(blob)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
  link.remove()
}
