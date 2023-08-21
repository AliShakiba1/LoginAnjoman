import { Button } from '@material-tailwind/react'
import { useCallback, useEffect, useMemo } from 'react'
import { useCounterStore } from '../states/counterStore'

interface CounterProps {
  className: string
}

export const Counter = ({ className }: CounterProps) => {
  const [count, inc, dec, res] = useCounterStore(state => [
    state.count,
    state.inc,
    state.dec,
    state.res,
  ])
  useEffect(() => {
    if (count < 0) {
      console.log(`lower than 0`)
      res()
    }
  }, [count])

  useMemo(() => {
    console.log(':)')
  }, [dec])
  return (
    <>
      <div className={`${className} grid-rows-2`}>
        <Button
          color="light-blue"
          className="row-span-1 mr-2 h-10"
          onClick={dec}
          value="1"
        >
          -1
        </Button>
        <Button color="blue-gray" className="h-13 row-span-1" onClick={res}>
          {count}
        </Button>
        <Button
          color="light-blue"
          className="row-span-1 ml-2 h-10"
          onClick={inc}
          value="1"
        >
          +1
        </Button>
      </div>
    </>
  )
}
