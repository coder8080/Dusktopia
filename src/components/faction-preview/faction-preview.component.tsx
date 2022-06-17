import { FC, MutableRefObject, useRef } from 'react'
import Button from '../button/button.component'
import { selectActivePreview } from '../../redux/factions/selectors'
import {
  setActivePreview,
  resetDefaultPreview,
  setActivePopup,
} from '../../redux/factions/actions'
import { useSelector, useDispatch } from 'react-redux'
import Gem from '../gem/gem.component'
import './faction-preview.styles.scss'

interface FactionPreviewProps {
  title: string
  line: 'left' | 'right'
  id: string
  imageUrl: string
  buttonType: 'badlands-gradient'
}

const FactionPreview: FC<FactionPreviewProps> = ({
  id,
  title,
  line,
  imageUrl,
  buttonType,
}) => {
  const imageContainerRef = useRef() as MutableRefObject<HTMLDivElement>
  const activeId = useSelector(selectActivePreview)
  const dispatch = useDispatch()
  const isActive = id === activeId
  return (
    <div
      className="faction-preview"
      onMouseEnter={() => dispatch(setActivePreview(id))}
      onMouseLeave={() => dispatch(resetDefaultPreview())}
    >
      <div className="title-container">
        <h3 className="faction-title light">{title}</h3>
      </div>
      <div className="gem-container">
        <Gem id={id} isActive={isActive} line={line} />
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
        <Button type={buttonType} onClick={() => dispatch(setActivePopup(id))}>
          More
        </Button>
        <div className="corner" />
      </div>
    </div>
  )
}

export default FactionPreview
