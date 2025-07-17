// import dayjs from 'dayjs'

import { bkkjs17 } from './archive/17'
import { bkkjs18 } from './archive/18'
import { bkkjs19 } from './archive/19'
import { bkkjs20 } from './archive/20'
import { bkkjs21 } from './archive/21'
import { bkkjs22 } from './archive/22'
import { bkkjs23 } from './archive/23'

import type { Active, Archive } from './types'

export const active: Active = null
// export const active: Active = {
//   number: 21,
//   date: dayjs('2024-09-14'),
//   links: {
//     event: 'https://www.eventpop.me/e/48968'
//   }
// }

export const archives: Archive[] = [
  bkkjs23,
  bkkjs22,
  bkkjs21,
  bkkjs20,
  bkkjs19,
  bkkjs18,
  bkkjs17
]
