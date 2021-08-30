import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
} from '@material-ui/core'
import React from 'react'

export default function NasaCard(props) {
  // console.log('PROPS', props)
  // console.log('DATE', props.date)
  return (
    <Grid>
      <Container>
        <Card>
          <CardContent>
            <Typography color='primary' variant='h1'>
              Welcome to Nasa!
            </Typography>
            <Typography color='primary' variant='h2'>
              {props.title}
            </Typography>
            <Typography color='primary' variant='subtitle1'>
              Date: {props.date}
            </Typography>
            <Typography color='primary' variant='subtitle2'>
              url: {props.url}
            </Typography>
            <Typography color='primary' variant='body1'>
              {props.explanation}
            </Typography>
            <img alt={props.title} src={props.url} />
          </CardContent>
        </Card>
      </Container>
    </Grid>
  )
}
