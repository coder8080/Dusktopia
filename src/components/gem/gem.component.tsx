import { FC } from 'react'
import './gem.styles.scss'

interface GemProps {
  isActive: boolean
  line: 'left' | 'right' | 'none'
  id: string
}

const Gem: FC<GemProps> = ({ id, isActive, line }) => (
  <svg viewBox="0 0 130 150" className="gem">
    <linearGradient
      id={`background-${id}`}
      gradientTransform="rotate(-45,0.5,0.5)"
    >
      <stop offset="0%" stopColor={isActive ? 'rgb(44, 216, 213)' : 'white'} />
      <stop
        offset="50%"
        stopColor={isActive ? 'rgb(197, 193, 255)' : 'white'}
      />
      <stop
        offset="100%"
        stopColor={isActive ? 'rgb(255, 186, 195)' : 'white'}
      />
    </linearGradient>
    <polygon
      points="27 53.3, 72.5 10, 118 53.3, 118 96.6, 72.5 140, 27 96.6, 27 96.6"
      fill="rgb(100, 100, 100)"
    />
    <polygon
      points="48 63.3, 72.5 40, 97 63.3, 97 86.6, 72.5 110, 48 86.6, 48 63.3"
      fill={`url(#background-${id})`}
      style={{
        filter: isActive
          ? `drop-shadow(0 5px 6px #D6C0EF)`
          : 'drop-shadow(0 0px 0px #D6C0EF)',
      }}
    />
    <path
      d={
        line === 'left'
          ? 'M 65 0 L 19.5 43.3, 19.5 86.6, 65 130'
          : line === 'right'
          ? 'M 65 0 L 110.5 43.3, 110.5 86.6, 65 130'
          : ''
      }
      fill="transparent"
      stroke="white"
      strokeWidth="15px"
      style={{
        transform: 'translateY(10px) translateX(7.5px)',
      }}
    />
  </svg>
)

export default Gem
