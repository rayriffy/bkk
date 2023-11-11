import type { Dayjs } from 'dayjs'

export type Active = null | {
  number: number
  date: Dayjs
  links: {
    event?: string
    cfp?: string
  }
}

export interface Archive {
  number: number
  date: Dayjs
  links: {
    event: string
    playlistId: string
  }
}
