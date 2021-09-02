import React from 'react'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'
import { Box } from '@material-ui/core'

export default function DatePickers(props) {
  return (
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
  )
}
