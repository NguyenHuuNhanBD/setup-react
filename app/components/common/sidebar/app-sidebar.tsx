import * as React from 'react'

import { BaselineInformationManagementIcon } from '~/assets/icons'
import { NavMain } from '~/components/common/sidebar/nav-main'
import { TeamSwitcher } from '~/components/common/sidebar/team-switcher'
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '~/components/ui/sidebar'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  navMain: [
    {
      title: '기준 정보 관리',
      url: '#',
      icon: BaselineInformationManagementIcon,
      items: [
        {
          title: '원사 코드',
          url: '/admin/yarn-code'
        },
        {
          title: '원단 코드',
          url: '/admin/item-code'
        },
        {
          title: '원사 코드',
          url: ''
        },
        {
          title: '업체코드',
          url: ''
        },
        {
          title: '직원코드',
          url: ''
        },
        {
          title: '고객사코드',
          url: ''
        },
        {
          title: '홈페이지 원단 코드',
          url: ''
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='p-0 mt-5'>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className='mt-[15px] p-[15px]'>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
