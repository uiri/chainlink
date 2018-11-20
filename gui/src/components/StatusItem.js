import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StatusIcon from 'components/JobRuns/StatusIcon'

const styles = theme => {
  return {
    item: {
      borderTop: 'solid 1px',
      borderTopColor: theme.palette.divider,
      position: 'relative',
      paddingLeft: 50
    },
    status: {
      position: 'absolute',
      top: 0,
      left: 0,
      paddingTop: 25,
      paddingLeft: 35,
      borderRight: 'solid 1px',
      borderRightColor: theme.palette.divider,
      width: 50,
      height: '100%'
    },
    details: {
      padding: theme.spacing.unit * 2
    },
    expansionPanel: {
      boxShadow: 'none'
    }
  }
}

const render = (summary, children, classes) => {
  if (children) {
    return (
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='title'>{summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  return <Typography>{summary}</Typography>
}

const StatusItem = ({status, summary, children, classes}) => (
  <div className={classes.item}>
    <div className={classes.status}>
      <StatusIcon>{status}</StatusIcon>
    </div>
    <div className={classes.details}>
      <Grid container>
        <Grid item xs={12}>
          {render(summary, children, classes)}
        </Grid>
      </Grid>
    </div>
  </div>
)

StatusItem.propTypes = {
  status: PropTypes.string.isRequired
}

export default withStyles(styles)(StatusItem)
