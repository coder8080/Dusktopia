import { FC, MutableRefObject, useRef } from 'react'
import Button from '../button/button.component'
import Gem from '../gem/gem.component'
import './faction-preview.styles.scss'

interface FactionPreviewProps {
  activeId: number
  title: string
  line: 'left' | 'right'
  id: number
  imageUrl: string
  buttonType: 'badlands-gradient'
  setActiveId: (id: number | null) => void
}

const FactionPreview: FC<FactionPreviewProps> = ({
  id,
  activeId,
  title,
  line,
  imageUrl,
  buttonType,
  setActiveId,
}) => {
  const imageContainerRef = useRef() as MutableRefObject<HTMLDivElement>
  const isActive = id === activeId
  return (
    <div
      className="faction-preview"
      onMouseEnter={() => setActiveId(id)}
      onMouseLeave={() => setActiveId(null)}
    >
      <div className="title-container">
        <h3 className="faction-title light">{title}</h3>
      </div>
      <div className="gem-container">
        <Gem number={id} isActive={isActive} line={line} />
      </div>
      <div
        className="image-container"
        ref={imageContainerRef}
        style={{
          height: isActive
            ? `${imageContainerRef.current.scrollHeight}px`
            : '0px',
        }}
      >
        <img src={imageUrl} alt="Preview" />
        <Button type={buttonType}>More</Button>
        <div className="corner" />
      </div>
    </div>
  )
}

export default FactionPreview
