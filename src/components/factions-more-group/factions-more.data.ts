import BadlandsTitle from '../../assets/faction-titles/badlands.svg'
import BadlandsBackground from '../../assets/faction-backgrounds/badlands.png'
import BadlandsNormal1 from '../../assets/faction-objects/badlands/normal/1.png'
import BadlandsNormal2 from '../../assets/faction-objects/badlands/normal/2.png'
import BadlandsNormal3 from '../../assets/faction-objects/badlands/normal/3.png'
import BadlandsNormal4 from '../../assets/faction-objects/badlands/normal/4.png'
import BadlandsDark1 from '../../assets/faction-objects/badlands/dark/1.png'
import BadlandsDark2 from '../../assets/faction-objects/badlands/dark/2.png'
import BadlandsDark3 from '../../assets/faction-objects/badlands/dark/3.png'
import BadlandsDark4 from '../../assets/faction-objects/badlands/dark/4.png'

import FrontierTitle from '../../assets/faction-titles/frontier.svg'
import FrontierTitle1 from '../../assets/faction-titles/frontier-1.svg'
import FrontierTitle2 from '../../assets/faction-titles/frontier-2.svg'
import FrontierBackground from '../../assets/faction-backgrounds/frontier.png'
import FrontierNormal1 from '../../assets/faction-objects/frontier/normal/1.png'
import FrontierNormal2 from '../../assets/faction-objects/frontier/normal/2.png'
import FrontierNormal3 from '../../assets/faction-objects/frontier/normal/3.png'
import FrontierNormal4 from '../../assets/faction-objects/frontier/normal/4.png'
import FrontierDark1 from '../../assets/faction-objects/frontier/dark/1.png'
import FrontierDark2 from '../../assets/faction-objects/frontier/dark/2.png'
import FrontierDark3 from '../../assets/faction-objects/frontier/dark/3.png'
import FrontierDark4 from '../../assets/faction-objects/frontier/dark/4.png'

import GroveTitle from '../../assets/faction-titles/grove.svg'
import GroveTitle1 from '../../assets/faction-titles/grove-1.svg'
import GroveTitle2 from '../../assets/faction-titles/grove-2.svg'
import GroveBackground from '../../assets/faction-backgrounds/grove.png'
import GroveNormal1 from '../../assets/faction-objects/grove/normal/1.png'
import GroveNormal2 from '../../assets/faction-objects/grove/normal/2.png'
import GroveNormal3 from '../../assets/faction-objects/grove/normal/3.png'
import GroveNormal4 from '../../assets/faction-objects/grove/normal/4.png'
import GroveDark1 from '../../assets/faction-objects/grove/dark/1.png'
import GroveDark2 from '../../assets/faction-objects/grove/dark/2.png'
import GroveDark3 from '../../assets/faction-objects/grove/dark/3.png'
import GroveDark4 from '../../assets/faction-objects/grove/dark/4.png'

import CitadelTitle from '../../assets/faction-titles/citadel.svg'
import CitadelTitle1 from '../../assets/faction-titles/citadel-1.svg'
import CitadelTitle2 from '../../assets/faction-titles/citadel-2.svg'
import CitadelBackground from '../../assets/faction-backgrounds/citadel.png'
import CitadelNormal1 from '../../assets/faction-objects/citadel/normal/1.png'
import CitadelNormal2 from '../../assets/faction-objects/citadel/normal/2.png'
import CitadelNormal3 from '../../assets/faction-objects/citadel/normal/3.png'
import CitadelNormal4 from '../../assets/faction-objects/citadel/normal/4.png'
import CitadelDark1 from '../../assets/faction-objects/citadel/dark/1.png'
import CitadelDark2 from '../../assets/faction-objects/citadel/dark/2.png'
import CitadelDark3 from '../../assets/faction-objects/citadel/dark/3.png'
import CitadelDark4 from '../../assets/faction-objects/citadel/dark/4.png'

interface FactionData {
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

interface FactionsMoreData {
  badlands: FactionData
  frontier: FactionData
  grove: FactionData
  citadel: FactionData
}

const FACTIONS_MORE_DATA: FactionsMoreData = {
  badlands: {
    titleImgUrl: BadlandsTitle,
    mobileTitleImgUrl: [BadlandsTitle],
    id: 'badlands',
    title: 'Badlands',
    backgroundImgUrl: BadlandsBackground,
    description: [
      'Modern-day Dusktopia begins here ',
      'The first thing that counts here is survival Only then can you think of profit; then finally domination',
      'Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way',
    ],
    objects: [
      BadlandsNormal1,
      BadlandsNormal2,
      BadlandsNormal3,
      BadlandsNormal4,
    ],
    darkObjects: [BadlandsDark1, BadlandsDark2, BadlandsDark3, BadlandsDark4],
    color1: '#F1A347',
    color2: '#FF72E0',
  },
  frontier: {
    titleImgUrl: FrontierTitle,
    mobileTitleImgUrl: [FrontierTitle1, FrontierTitle2],
    id: 'frontier',
    title: 'Frontier',
    backgroundImgUrl: FrontierBackground,
    description: [
      'The home of everything warfare in Dusktopia',
      'Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it',
      'Which side are you joining? ',
    ],
    objects: [
      FrontierNormal1,
      FrontierNormal2,
      FrontierNormal3,
      FrontierNormal4,
    ],
    darkObjects: [FrontierDark1, FrontierDark2, FrontierDark3, FrontierDark4],
    color1: '#6BB4C0',
    color2: '#61B4FA',
  },
  grove: {
    titleImgUrl: GroveTitle,
    mobileTitleImgUrl: [GroveTitle1, GroveTitle2],
    id: 'grove',
    title: 'Grove',
    backgroundImgUrl: GroveBackground,
    description: [
      'Dusktopia’s last remaining sanctuary of peace',
      'Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world',
      'A small faction wants more - selling Aurium on the black market for their own personal gain',
      'Will you root out the traitors or join them?',
    ],
    objects: [GroveNormal1, GroveNormal2, GroveNormal3, GroveNormal4],
    darkObjects: [GroveDark1, GroveDark2, GroveDark3, GroveDark4],
    color1: '#B24AC2',
    color2: '#68E3D5',
  },
  citadel: {
    titleImgUrl: CitadelTitle,
    mobileTitleImgUrl: [CitadelTitle1, CitadelTitle2],
    id: 'citadel',
    title: 'Citadel',
    backgroundImgUrl: CitadelBackground,
    description: [
      'These are where the apex predators in Dusktopia reside',
      'The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace',
      'If you’re lucky enough to be part of it, hold on tight - everybody wants what you have',
    ],
    objects: [CitadelNormal1, CitadelNormal2, CitadelNormal3, CitadelNormal4],
    darkObjects: [CitadelDark1, CitadelDark2, CitadelDark3, CitadelDark4],
    color1: '#E4DF77',
    color2: '#68E3D5',
  },
}

export default FACTIONS_MORE_DATA
