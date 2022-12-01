import { Typography } from '@mui/material/'
import { useTheme } from '@mui/material/styles'

const MuiMode = () => {
  const theme = useTheme()
  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}

export default MuiMode
