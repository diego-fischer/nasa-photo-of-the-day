import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function NasaCard(props) {
  const { obj } = props
  const avatar = obj.title.split(' ').pop().charAt(0)
  const shortExplanation = obj.explanation.substring(0, 30)
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Box mb={2} className={classes.root}>
        <Card raised={true} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={obj.title}
            subheader={obj.date}
          />
          <CardMedia
            className={classes.media}
            image={obj.hdurl ? obj.hdurl : obj.url}
            title={obj.title}
          />

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          {expanded ? (
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>{obj.explanation}</Typography>
              </CardContent>
            </Collapse>
          ) : (
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {shortExplanation}...
              </Typography>
            </CardContent>
          )}
        </Card>
      </Box>
    </Grid>
  )
}
