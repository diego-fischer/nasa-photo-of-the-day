import React from 'react'
import { Container } from '@material-ui/core'
import { Card } from '@material-ui/core'
import axios from 'axios'

export default function Body() {
  const api_key = 'BdgQlWf6ucvJktrCP2SxWEKf1fnAUcT4GXx4tIFs'

  const fetchData = async () => {
    const { data } = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key,
      },
    })
    return data
  }

  fetchData().then((data) => console.log(data))

  return (
    <Container>
      <Card>Hello</Card>
    </Container>
  )
}
