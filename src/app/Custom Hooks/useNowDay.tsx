import { memo, useEffect, useMemo, useState } from 'react'

const p2e = (s: any) =>
  +s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

const useNowDay = (props: any) => {
  const [nowtime, setNowTime] = useState<string[]>()
  useEffect(() => {
    const date = new Date().toLocaleDateString('fa-IR').split('/')
    setNowTime(date)
  }, [props.getDay])

  const nowTime: any = {
    year: p2e(nowtime?.slice(0)),
    month: p2e(nowtime?.slice(1)),
    day: p2e(nowtime?.slice(2)),
  }

  const disabledDays = [
    {
      year: 1402,
      month: 6,
      day: 24,
    },
    {
      year: 1402,
      month: 6,
      day: 7,
    },
    {
      year: 1402,
      month: 7,
      day: 7,
    },
    {
      year: 1402,
      month: 6,
      day: 16,
    },
    {
      year: 1402,
      month: 6,
      day: 13,
    },
  ]

  return [nowTime, disabledDays]
}

export default memo(useNowDay)
