import { create } from 'zustand'

type State = {
  count: number
}
type Action = {
  inc: () => void
  dec: () => void
  res: () => void

}
export const useCounterStore = create<State & Action>(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
  res: () => set(() => ({ count: 0 })),

}))
