import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NasaCards from './NasaCards'
import DatePickers from './DatePickers'

import { Typography, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

export default function Body() {
  const apiKey = 'BdgQlWf6ucvJktrCP2SxWEKf1fnAUcT4GXx4tIFs'
  const [obj, setObj] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const currentDate = new Date()

  const handleStartDateChange = (date) => {
    const newDate = formatDate(date)
    setStartDate(newDate)
  }

  const handleEndDateChange = (date) => {
    const newDate = formatDate(date)
    setEndDate(newDate)
  }

  const [readyToQuery, setReadyToQuery] = useState(false)

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  useEffect(() => {
    if (startDate !== null && endDate !== null && endDate > startDate) {
      console.log('execute axios call')
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
        )
        .then((res) => {
          console.log(res)
          setReadyToQuery(true)
        })
    } else if (startDate > endDate && endDate !== null) {
      console.log('show error message')
      setReadyToQuery(false)
    } else if (startDate > currentDate || endDate > currentDate) {
      alert(`Selected date is greater than today's date`)
    }
    console.log('START DATE', startDate)
    console.log('END DATE', endDate)
  }, [startDate, endDate])

  useEffect(() => {
    console.log('START DATE', startDate)
    console.log('END DATE', endDate)
    console.log('READY TO QUERY', readyToQuery)
  }, [startDate, endDate, readyToQuery])

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

      <Box>
        <DatePickers
          startDateValue={startDate}
          startDateOnChange={(date) => handleStartDateChange(date)}
          endeDateValue={endDate}
          endDateOnChange={(date) => handleEndDateChange(date)}
        />
      </Box>
    </Grid>
  )
}
