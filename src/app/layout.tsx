export {metadata} from '@/lib/layout-config'
import {geistMono, suisseIntl} from '@/lib/layout-config'
import '@/app/globals.css'
import {Toaster} from '~/UI/Sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${suisseIntl.variable} ${geistMono.variable} bg-black text-white font-sans antialiased`}>
        {children}

        <Toaster richColors />
      </body>
    </html>
  )
}
