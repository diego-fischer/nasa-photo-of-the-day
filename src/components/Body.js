import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NasaCards from './NasaCards'
import DatePickers from './DatePickers'

import { Typography, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

export default function Body() {
  const apiKey = 'BdgQlWf6ucvJktrCP2SxWEKf1fnAUcT4GXx4tIFs'
  const [objArr, setObjArr] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [querySuccess, setQuerySuccess] = useState(false)
  const [renderCards, setRenderCards] = useState(false)

  const handleStartDateChange = (date) => {
    const today = new Date()
    if (date <= today) {
      const newDate = formatDate(date)
      setStartDate(newDate)
    } else {
      alert(`Date can't be greater than today`)
    }
  }

  const handleEndDateChange = (date) => {
    const today = new Date()
    if (date <= today) {
      const newDate = formatDate(date)
      setEndDate(newDate)
    } else {
      alert(`Date can't be greater than today`)
    }
  }

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
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
        )
        .then((res) => {
          setObjArr(res.data)
          setQuerySuccess(true)
        })
        .catch((err) => console.log('ERROR', err))
    } else if (startDate > endDate && endDate !== null) {
      alert('Start Date is greater than End Date')
      setQuerySuccess(false)
    }
  }, [startDate, endDate])

  useEffect(() => {
    console.log('OBJ', objArr)
  }, [objArr])

  useEffect(() => {
    if (objArr !== null && querySuccess === true) {
      setRenderCards(true)
    }
  }, [objArr, querySuccess])

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

      {renderCards ? (
        <NasaCards objArr={objArr} />
      ) : (
        <DatePickers
          startDateValue={startDate}
          startDateOnChange={(date) => handleStartDateChange(date)}
          endeDateValue={endDate}
          endDateOnChange={(date) => handleEndDateChange(date)}
        />
      )}
    </Grid>
  )
}
