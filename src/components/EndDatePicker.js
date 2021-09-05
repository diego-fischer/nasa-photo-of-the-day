import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import moment from 'moment'

export default function EndDatePicker(props) {
  // The first commit of Material-UI

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent='space-around'>
        <KeyboardDatePicker
          // formatDate={(date) => moment(new Date()).format('YYYY-MM-DD')}
          format='MM-dd-yyyy' // new DF
          autoOk={true}
          disableToolbar
          variant='inline'
          margin='normal'
          id='date-picker-inline'
          label='End Date'
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
