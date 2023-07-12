// import SvgHomeIcon from '@/components/icons/HomeIcon.vue';
// import SvgLogoutIcon from '@/components/icons/LogoutIcon.vue';
// import SvgDashboardIcon from '@/components/icons/DashboardIcon.vue';
// import SvgAnalyticsIcon from '@/components/icons/AnalyticsIcon.vue';
// import SvgProfileIcon  from '@/components/icons/ProfileIcon.vue'

import { BarChart2, Home, LayoutDashboard, UserCircle } from 'lucide-vue-next'

interface Link {
  to: string
  icon: any
  text: string
}

export const navLinks: Link[] = [
  { to: '/', icon: Home, text: 'Home' },
  { to: '/dashboard', icon: LayoutDashboard, text: 'Dashboard' },
  { to: '/analytics', icon: BarChart2, text: 'Analytics' },
  { to: '/profile/1', icon: UserCircle, text: 'Profile' }
]
