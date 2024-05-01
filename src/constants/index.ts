interface SidebarLink {
  imgURL: string
  route: string
  label: string
  imgPrimary?: string
}

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: 'home-white',
    route: '/',
    label: 'Dashboard',
    imgPrimary: 'home-primary'
  },
  {
    imgURL: 'bubble',
    route: '#',
    label: 'Request'
  },
  {
    imgURL: 'document',
    route: '#',
    label: 'KYCs'
  },
  {
    imgURL: 'report',
    route: '#',
    label: 'Reports'
  },
  {
    imgURL: 'audit',
    route: '#',
    label: 'Audit Trail'
  },
  {
    imgURL: 'users',
    route: '#',
    label: 'Users'
  },
  {
    imgURL: 'settings',
    route: '#',
    label: 'Settings'
  }
]
export const tabLinks: SidebarLink[] = [
  {
    imgURL: 'home-white',
    route: '/',
    label: 'Dashboard',
    imgPrimary: 'home-primary'
  },
  {
    imgURL: 'bubble',
    route: '#',
    label: 'Request'
  },
  {
    imgURL: 'document',
    route: '#',
    label: 'KYCs'
  },
  {
    imgURL: 'report',
    route: '#',
    label: 'Reports'
  },
  {
    imgURL: 'audit',
    route: '#',
    label: 'Audit Trail'
  }
]
