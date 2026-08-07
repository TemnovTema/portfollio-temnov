import ProjectNavigation from '~~/archive/ProjectNavigation'

export default function ArchiveLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      {children}
      <ProjectNavigation />
    </>
  )
}
