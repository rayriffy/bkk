import type { Dayjs } from 'dayjs'

export type Active = null | {
  number: number
  date: Dayjs
  links: {
    event?: string
    cfp?: {
      link: string
      until: Dayjs
    }
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
