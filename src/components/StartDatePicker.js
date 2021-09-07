import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

export default function StartDatePicker(props) {
  // The first commit of Material-UI

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent='space-around'>
        <KeyboardDatePicker
          format='MM-dd-yyyy'
          autoOk={true}
          disableToolbar
          variant='inline'
          margin='normal'
          id='date-picker-inline'
          label='Start Date'
          value={props.value}
          onChange={props.onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
