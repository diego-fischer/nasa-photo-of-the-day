import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NasaCards from './NasaCards'
import { Typography } from '@material-ui/core'
import './custom-styling.css'

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

      .catch((err) => console.log(err))
  }, [])

  console.log(obj)

  return (
    <React.Fragment>
      {obj == null ? (
        <Typography color='primary' variant='h4'>
          Please wait while we load awesome stuff...
        </Typography>
      ) : (
        <NasaCards
          date={obj.date}
          explanation={obj.explanation}
          url={obj.url}
          title={obj.title}
        />
      )}
    </React.Fragment>
  )
}
