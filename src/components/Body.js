import React from 'react'
import { Container } from '@material-ui/core'
import { Card } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Body() {
  const api_key = 'BdgQlWf6ucvJktrCP2SxWEKf1fnAUcT4GXx4tIFs'
  const [obj, setObj] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key,
        },
      })
      .then((r) => setObj(r.data))
  })

  return (
    <Container>
      <Card>{JSON.stringify(obj)}</Card>
    </Container>
  )
}
