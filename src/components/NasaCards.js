import { Card } from '@material-ui/core'
import React from 'react'

export default function NasaCards(props) {
  return (
    <React.Fragment>
      <Card>
        {props.data.map((el) => {
          return (
            <Card>
              Date: {el['date']}
              Explanation: {el['explanation']}
            </Card>
          )
        })}
      </Card>
    </React.Fragment>
  )
}
