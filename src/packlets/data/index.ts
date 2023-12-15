import dayjs from 'dayjs'

import { bkkjs17 } from './archive/17'
import { bkkjs18 } from './archive/18'

import type { Active, Archive } from './types'

export const active: Active = {
  number: 19,
  date: dayjs('2024-01-27'),
  links: {
    cfp: {
      link: 'https://grtn.org/e/bkkjs19/cfp',
      until: dayjs('2023-12-13'),
    },
    event: 'https://www.eventpop.me/e/16880',
  },
}

export const archives: Archive[] = [bkkjs18, bkkjs17]
