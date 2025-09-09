import Common from '~/components/common/common'

import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'My app' }, { name: 'description', content: 'Welcome to React Router' }]
}

export default function Home() {
  return <Common />
}
