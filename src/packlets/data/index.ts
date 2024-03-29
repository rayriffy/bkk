import dayjs from 'dayjs'

import { bkkjs17 } from './archive/17'
import { bkkjs18 } from './archive/18'
import { bkkjs19 } from './archive/19'

import type { Active, Archive } from './types'

export const active: Active = null

export const archives: Archive[] = [bkkjs19, bkkjs18, bkkjs17]
