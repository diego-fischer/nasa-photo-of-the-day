import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
} from '@material-ui/core'
import React from 'react'

export default function NasaCards(props) {
  return (
    <Grid>
      <Container>
        <Typography color='primary' variant='h1'>
          Welcome to Nasa!
        </Typography>
        <Card raised='true'>
          <CardContent>
            <Typography color='secondary' variant='h4'>
              {props.title}
            </Typography>
            <Typography color='primary' variant='subtitle1'>
              Date: {props.date}
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
