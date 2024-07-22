import React, { FC } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const DateMUI: FC<any> = ({ date, setDate }) => {
  const dateHandler = (date: any) => {
    setDate(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker onChange={dateHandler} className='MuiFieldBorder' />
    </LocalizationProvider>
  )
}

export default DateMUI
