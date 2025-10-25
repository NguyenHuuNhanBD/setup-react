import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

import { ROUTES } from './constants'

export default [
  route(ROUTES.HOME, './layouts/main-layout.tsx', [
    index('routes/main/home.tsx'),
    route(ROUTES.ABOUT, 'routes/main/about.tsx'),
    route(ROUTES.DEMO, 'routes/demo.tsx')
  ]),

  layout('./layouts/auth-layout.tsx', [
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.AUTH.LOGIN}`, 'routes/auth/login/login.tsx')
  ]),

  // Admin
  layout('./layouts/admin-layout.tsx', [
    route(`${ROUTES.ADMIN.BASE}`, 'routes/admin/index.tsx'),
    route(
      `${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.BASE_LINE_INFORMATION_MANAGEMENT.YARN_CODE}`,
      'routes/admin/baseline-information-management/yarn-code.tsx'
    ),
    route(
      `${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.BASE_LINE_INFORMATION_MANAGEMENT.ITEM_CODE}`,
      'routes/admin/baseline-information-management/item-code.tsx'
    ),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.TEST.PAGE_01}`, 'routes/admin/test/test-page-01.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.TEST.PAGE_02}`, 'routes/admin/test/test-page-02.tsx')
  ]),

  // Not found
  route('*', 'routes/not-found.tsx')
] satisfies RouteConfig
