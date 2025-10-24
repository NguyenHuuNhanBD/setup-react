import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '~/components/ui/sidebar'

export function NavMain({
  items
}: {
  items: {
    title: string
    url: string
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const location = useLocation()

  return (
    <SidebarGroup className='p-0'>
      <SidebarMenu>
        {items.map((item) => {
          const isParentActive = item.items?.some((sub) => location.pathname === sub.url)
          const isChildActive = item.items?.some((sub) => location.pathname === sub.url)

          return item.items && item.items.length > 0 ? (
            // --- Có submenu ---
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isParentActive || isChildActive}
              className='group/collapsible'
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    asChild
                    data-active={isParentActive}
                    className={clsx(
                      'data-[active=true]:bg-[#0E35FF] data-[active=true]:text-white h-[45px] py-[12.5px] px-[15px]',
                      isParentActive ? 'hover:bg-[#0E35FF]! hover:text-white!' : 'hover:bg-gray-300!'
                    )}
                  >
                    <Link to={item.url} className='flex items-center gap-[15px]'>
                      {item.icon && (
                        <item.icon
                          style={{ width: 20, height: 20 }}
                          className={clsx(isParentActive ? 'text-white' : 'text-[#A4B5BA]')}
                        />
                      )}
                      <span>{item.title}</span>
                      <ChevronDown className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180' />
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {item.items.map((subItem) => {
                    const isSubActive = location.pathname === subItem.url
                    return (
                      <SidebarMenuSubItem
                        key={subItem.title}
                        className='py-2.5 px-5 h-10 flex items-center justify-start'
                      >
                        <SidebarMenuSubButton asChild data-active={isSubActive} className='bg-transparent!'>
                          <Link to={subItem.url} className='flex items-center gap-[15px]'>
                            <section className='w-5 h-5 flex items-center justify-center'>
                              <span
                                className={clsx('w-1 h-1 rounded-[100px]', isSubActive ? 'bg-[#0E35FF]' : 'bg-black')}
                              ></span>
                            </section>
                            <span className={clsx(isSubActive ? 'text-[#0E35FF]' : 'text-black')}>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  })}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            // --- Không có submenu ---
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                data-active={location.pathname === item.url}
                className='data-[active=true]:bg-red-500/15 data-[active=true]:text-red-500'
              >
                <Link to={item.url} className='flex items-center gap-2'>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
