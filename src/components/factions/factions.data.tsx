import Badlands from '../../assets/faction-previews/badlands.png'
import Frontier from '../../assets/faction-previews/frontier.png'
import Grove from '../../assets/faction-previews/grove.png'
import Citadel from '../../assets/faction-previews/citadel.png'

interface Faction {
  id: string
  title: string
  imageUrl: string
  line: 'left' | 'right'
  buttonType:
    | 'badlands-gradient'
    | 'frontier-gradient'
    | 'grove-gradient'
    | 'citadel-gradient'
}

interface FactionsDataInterface {
  badlands: Faction
  frontier: Faction
  grove: Faction
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
  grove: {
    id: 'grove',
    title: 'Sundered Grove',
    imageUrl: Grove,
    line: 'left',
    buttonType: 'grove-gradient',
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
