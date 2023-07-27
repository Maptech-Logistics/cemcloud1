import SvgHomeIcon from '@/components/icons/HomeIcon.vue'
import SvgDashboardIcon from '@/components/icons/DashboardIcon.vue'
import SvgAnalyticsIcon from '@/components/icons/AnalyticsIcon.vue'
import SvgProfileIcon from '@/components/icons/ProfileIcon.vue'
import type { Link } from '@/types/types'

export const navLinks: Link[] = [
  // { to: '/', icon: SvgHomeIcon, text: 'Home' },
  { to: '/dashboard', icon: SvgDashboardIcon, text: 'Dashboard' },
  // { to: '/analytics', icon: SvgAnalyticsIcon, text: 'Analytics' },
  // { to: '/profile/1', icon: SvgProfileIcon, text: 'Profile' }
]

