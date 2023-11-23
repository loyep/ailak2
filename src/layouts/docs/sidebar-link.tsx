import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
}

export default function SidebarLink({
  children,
  href,
}: SidebarLinkProps) {

  const pathname = usePathname()
  
  return (
    <Link className={`flex items-center space-x-3 font-medium ${pathname === href ? 'text-blue-600' : 'text-slate-800 dark:text-slate-200'}`} href={href}>
      {children}
    </Link>
  )
}
