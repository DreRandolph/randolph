'use client'

export default function DownloadBtn() {
  const handleClick = async () => {
    const response = await fetch('/api/file')
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Deandre_Randolph_Resume.pdf'
    link.click()
    window.URL.revokeObjectURL(url)
  }
  return (
    <main>
      <button
        className=" border-2 p-4 m-4 rounded-lg bg-amber-300 underline text-black hover:bg-amber-400 transition-all hover:scale-115  duration-300"
        type="button"
        onClick={handleClick}
      >
        Download Resume
      </button>
    </main>
  )
}
