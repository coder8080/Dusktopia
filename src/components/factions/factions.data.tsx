import Badlands from '../../assets/faction-previews/badlands.png'
import Frontier from '../../assets/faction-previews/frontier.png'
import Groove from '../../assets/faction-previews/groove.png'
import Citadel from '../../assets/faction-previews/citadel.png'

interface Faction {
  id: string
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
    id: 'badlands',
    title: 'Blighted Badlands',
    imageUrl: Badlands,
    line: 'left',
    buttonType: 'badlands-gradient',
  },
  frontier: {
    id: 'frontier',
    title: 'Glacial Frontier',
    imageUrl: Frontier,
    line: 'right',
    buttonType: 'frontier-gradient',
  },
  groove: {
    id: 'grove',
    title: 'Sundered Grove',
    imageUrl: Groove,
    line: 'left',
    buttonType: 'groove-gradient',
  },
  citadel: {
    id: 'citadel',
    title: 'Sky Citadel',
    imageUrl: Citadel,
    line: 'right',
    buttonType: 'citadel-gradient',
  },
}

export default FACTIONS_DATA
