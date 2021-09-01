import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NasaCards from './NasaCards'
import { Typography, Box } from '@material-ui/core'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'

export default function Body() {
  const api_key = 'BdgQlWf6ucvJktrCP2SxWEKf1fnAUcT4GXx4tIFs'
  const [obj, setObj] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  console.log('START DATE', startDate)
  console.log('END DATE', endDate)

  return (
    <React.Fragment>
      <Box mt={10}>
        <Typography variant='h1'>Nasa Observatory</Typography>
      </Box>

      <Box mt={5}>
        <Typography variant='subtitle1'>
          Nasa discloses one awesome photo per day. Please select below the
          dates interval for which your gallery will be generated.
        </Typography>
      </Box>

      <Box>
        <StartDatePicker
          value={startDate}
          onChange={(date) => handleStartDateChange(date)}
        />
        <EndDatePicker
          value={endDate}
          onChange={(date) => handleEndDateChange(date)}
        />
      </Box>
    </React.Fragment>
  )
}
