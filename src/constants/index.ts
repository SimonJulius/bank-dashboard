interface SidebarLink {
  imgURL: string
  route: string
  label: string
  imgPrimary?: string
}

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '../../assets/icons/home-white.svg',
    route: '/',
    label: 'Dashboard',
    imgPrimary: '../../assets/icons/home-primary.svg'
  },
  {
    imgURL: '../../assets/icons/bubble.svg',
    route: '#',
    label: 'Request'
  },
  {
    imgURL: '../../assets/icons/document.svg',
    route: '#',
    label: 'KYCs'
  },
  {
    imgURL: '../../assets/icons/report.svg',
    route: '#',
    label: 'Reports'
  },
  {
    imgURL: '../../assets/icons/audit.svg',
    route: '#',
    label: 'Audit Trail'
  },
  {
    imgURL: '../../assets/icons/users.svg',
    route: '#',
    label: 'Users'
  },
  {
    imgURL: '../../assets/icons/settings.svg',
    route: '#',
    label: 'Settings'
  }
]
export const tabLinks: SidebarLink[] = [
  {
    imgURL: '../../assets/icons/home-white.svg',
    route: '/',
    label: 'Dashboard',
    imgPrimary: '../../assets/icons/home-primary.svg'
  },
  {
    imgURL: '../../assets/icons/bubble.svg',
    route: '#',
    label: 'Request'
  },
  {
    imgURL: '../../assets/icons/document.svg',
    route: '#',
    label: 'KYCs'
  },
  {
    imgURL: '../../assets/icons/report.svg',
    route: '#',
    label: 'Reports'
  },
  {
    imgURL: '../../assets/icons/audit.svg',
    route: '#',
    label: 'Audit Trail'
  }
]
