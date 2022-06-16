import Badlands from '../../assets/faction-previews/badlands.png'
import Frontier from '../../assets/faction-previews/frontier.png'
import Groove from '../../assets/faction-previews/groove.png'
import Citadel from '../../assets/faction-previews/citadel.png'

interface Faction {
  id: number
  title: string
  imageUrl: string
  line: 'left' | 'right'
  buttonType:
    | 'badlands-gradient'
    | 'frontier-gradient'
    | 'groove-gradient'
    | 'citadel-gradient'
}

interface FactionsDataInterface {
  badlands: Faction
  frontier: Faction
  groove: Faction
  citadel: Faction
}

const FACTIONS_DATA: FactionsDataInterface = {
  badlands: {
    id: 1,
    title: 'Blighted Badlands',
    imageUrl: Badlands,
    line: 'left',
    buttonType: 'badlands-gradient',
  },
  frontier: {
    id: 2,
    title: 'Glacial Frontier',
    imageUrl: Frontier,
    line: 'right',
    buttonType: 'frontier-gradient',
  },
  groove: {
    id: 3,
    title: 'Sundered Grove',
    imageUrl: Groove,
    line: 'left',
    buttonType: 'groove-gradient',
  },
  citadel: {
    id: 4,
    title: 'Sky Citadel',
    imageUrl: Citadel,
    line: 'right',
    buttonType: 'citadel-gradient',
  },
}

export default FACTIONS_DATA
