import dayjs from 'dayjs'

import { bkkjs17 } from './archive/17'
import { bkkjs18 } from './archive/18'
import { bkkjs19 } from './archive/19'

import type { Active, Archive } from './types'

export const active: Active = {
  number: 20,
  date: dayjs('2024-05-18'),
  links: {
    cfp: {
      link: 'https://www.eventpop.me/events/26956-bkkjs20/application_forms/1844/applicants/new',
      until: dayjs('2024-04-30'),
    },
    event: 'https://www.eventpop.me/e/26956/bkkjs20',
  },
}

export const archives: Archive[] = [bkkjs19, bkkjs18, bkkjs17]
