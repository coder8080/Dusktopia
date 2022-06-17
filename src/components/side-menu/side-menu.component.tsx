import { FC } from 'react'
import './side-menu.styles.scss'

const sections = [
  'home',
  'factions',
  'roadmap',
  'collaborations',
  'faq',
  'team',
]

interface SideMenuProps {
  currentSection:
    | 'home'
    | 'factions'
    | 'roadmap'
    | 'collaborations'
    | 'faq'
    | 'team'
}

const SideMenu: FC<SideMenuProps> = ({ currentSection }) => {
  const currentIndex = sections.indexOf(currentSection)
  if (currentIndex === -1) throw new Error('invalid section name')

  return (
    <div className="side-menu">
      {sections.map((name, i) => (
        <a
          href={`#${name}`}
          key={i}
          className={`menu-link${i === currentIndex ? ' active' : ''}${
            Math.abs(currentIndex - i) < 2 ||
            (currentIndex === 0 && i - currentIndex < 3)
              ? ' display'
              : ''
          }`}
        >
          {name}
        </a>
      ))}
    </div>
  )
}

export default SideMenu
