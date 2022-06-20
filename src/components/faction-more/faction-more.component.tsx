import { FC, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectActivePopup } from '../../redux/factions/selectors'
import { closePopup, nextPopup } from '../../redux/factions/actions'
import Button from '../button/button.component'
import Gem from '../gem/gem.component'
import SideMenu from '../side-menu/side-menu.component'
import RightArrow from '../../assets/right-arrow.svg'
import RightArrowLight from '../../assets/right-arrow-light.svg'
import Cross from '../../assets/cross.svg'
import './faction-more.styles.scss'

interface FactionMoreProps {
  id: string
  titleImgUrl: string
  mobileTitleImgUrl: string[]
  title: string
  backgroundImgUrl: string
  description: string[]
  objects: string[]
  darkObjects: string[]
  color1: string
  color2: string
}

const FactionMore: FC<FactionMoreProps> = ({
  id,
  titleImgUrl,
  mobileTitleImgUrl,
  title,
  backgroundImgUrl,
  description,
  objects,
  darkObjects,
  color1,
  color2,
}) => {
  const activeId = useSelector(selectActivePopup)
  const dispatch = useDispatch()
  const isActive = activeId === id
  useLayoutEffect(() => {
    document.body.style.overflow = activeId !== null ? 'hidden' : 'auto'
  }, [activeId])
  return (
    <div
      className={`faction-more${isActive ? ' active' : ''}`}
      style={{ backgroundImage: `url('${backgroundImgUrl}')` }}
    >
      <SideMenu
        currentSection="factions"
        onClick={() => dispatch(closePopup())}
      />
      <div className="content">
        <div className="buttons-container">
          <Button type="transparent" onClick={() => dispatch(closePopup())}>
            Close
          </Button>
          <Button type="white" onClick={() => dispatch(nextPopup())}>
            Next
            <img src={RightArrow} className="btn-icon" alt="right-arrow" />
          </Button>
          <div className="close-mobile" onClick={() => dispatch(closePopup())}>
            <img src={Cross} alt="close" />
          </div>
          <div className="next-mobile" onClick={() => dispatch(nextPopup())}>
            <img src={RightArrowLight} alt="next" />
          </div>
        </div>
        <div className="title-container">
          <img src={titleImgUrl} alt={title} className="desktop-title" />
          {mobileTitleImgUrl.map((url, i) => (
            <img className="mobile-title" src={url} alt={title} key={i} />
          ))}
        </div>
        <div className="scroll-container">
          <div className="description-container">
            {description.map((text, i) => (
              <p key={i} className="description light">
                {text}
              </p>
            ))}
          </div>
          <div className="objects-container">
            {objects.map((imageUrl, i) => (
              <div className="group" key={i}>
                <div className="object-card">
                  <img src={imageUrl} alt="nft" />
                </div>
                <div className="object-card">
                  <img src={darkObjects[i]} alt="nft" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gem-container">
        <Gem isActive={true} id={`${id}-more`} line="none" />
      </div>
      <div
        className="faction-more-ellipse faction-more-ellipse-1"
        style={{ backgroundColor: color1 }}
      />
      <div
        className="faction-more-ellipse faction-more-ellipse-2"
        style={{ backgroundColor: color2 }}
      />
    </div>
  )
}

export default FactionMore
