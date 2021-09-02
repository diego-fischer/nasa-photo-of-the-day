import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NasaCards from './NasaCards'
import DatePickers from './DatePickers'

import { Typography, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

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

  useEffect(() => {
    console.log('START DATE', startDate)
    console.log('END DATE', endDate)
  })

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Box mt={10}>
        <Typography variant='h1'>Nasa Observatory</Typography>
      </Box>

      <Box mt={5}>
        <Typography align='center' variant='subtitle1'>
          Nasa discloses one awesome photo per day. Please select below the
          dates interval for which your gallery will be generated.
        </Typography>
      </Box>
      <DatePickers
        startDateValue={startDate}
        startDateOnChange={(date) => handleStartDateChange(date)}
        endeDateValue={endDate}
        endDateOnChange={(date) => handleEndDateChange(date)}
      />
    </Grid>
  )
}
