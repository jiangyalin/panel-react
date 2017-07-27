import {
  START,
  STOP,
  RESET
} from './actionsTypes'

export const onA = () => ({ type: START })

export const onB = () => ({ type: STOP })

export const onC = () => ({ type: RESET })