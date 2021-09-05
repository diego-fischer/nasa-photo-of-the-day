import React from 'react'
import NasaCard from './NasaCard'
import Grid from '@material-ui/core/Grid'

export default function NasaCards(props) {
  const { objArr } = props
  console.log('OBJARR PROP RECEIVED', objArr)

  return (
    <Grid
      container
      spacing={0}
      display='flex'
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      {objArr.map((el) => {
        return <NasaCard obj={el}>Date example: {el.date}</NasaCard>
      })}
    </Grid>
  )
}
