import { FC } from 'react'
import './subtitle.styles.scss'

interface SubtitleProps {
  type: 1 | 2
  text: string
}

const Subtitle: FC<SubtitleProps> = ({ type, text }) => (
  <div className={`subtitle type-${String(type)}`}>
    <span className="text">{text}</span>
    <img className="underline" alt="underline" />
  </div>
)

export default Subtitle
