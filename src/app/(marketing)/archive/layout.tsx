import ProjectNavigation from '~~/archive/ProjectNavigation'

export default function ArchiveLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="min-h-[100dvh] bg-[#e7e7e2] text-[#191918] selection:bg-black selection:text-white">
      {children}
      <ProjectNavigation />
    </div>
  )
}
