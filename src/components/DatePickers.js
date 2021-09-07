import React from 'react'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'
import { Typography, Box } from '@material-ui/core'

export default function DatePickers(props) {
  return (
    <React.Fragment>
      <Box mt={3} mb={5}>
        <Typography align='center' variant='subtitle1'>
          Nasa discloses one awesome photo per day. <br /> Please select below
          the dates interval for which your gallery will be generated.
        </Typography>
      </Box>
      <Box>
        <StartDatePicker
          value={props.startDateValue}
          onChange={(date) => props.startDateOnChange(date)}
        />
        <EndDatePicker
          value={props.endeDateValue}
          onChange={(date) => props.endDateOnChange(date)}
        />
      </Box>
    </React.Fragment>
  )
}
