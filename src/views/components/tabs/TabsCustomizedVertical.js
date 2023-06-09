// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  minHeight: 40,
  marginRight: theme.spacing(4),
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minHeight: 40,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const TabsCustomizedVertical = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelLeftRound='both' orientation='vertical'>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <TabList orientation='vertical' onChange={handleChange} aria-label='customized vertical tabs example'>
            <Tab value='1' label='Tab 1' />
            <Tab value='2' label='Tab 2' />
            <Tab value='3' label='Tab 3' />
          </TabList>
          <TabPanel value='1'>
            <Typography>
              Muffin shortbread biscuit powder bonbon pie cheesecake macaroon. Muffin sesame snaps toffee marzipan
              candy. Sesame snaps tiramisu apple pie tart marshmallow marzipan toffee chocolate bar. Caramels donut ice
              cream cotton candy candy sesame snaps. Muffin halvah powder topping candy canes sugar plum.
            </Typography>
          </TabPanel>
          <TabPanel value='2'>
            <Typography>
              Brownie cake jujubes pudding caramels. Biscuit powder dragée chocolate bar caramels tiramisu soufflé.
              Danish apple pie sweet roll donut cookie. Sweet roll donut cake dessert donut liquorice dessert. Cake bear
              claw cake gummi bears gingerbread tart pie marzipan. Shortbread shortbread cake danish dragée powder.
            </Typography>
          </TabPanel>
          <TabPanel value='3'>
            <Typography>
              Cheesecake fruitcake chocolate donut bear claw tiramisu powder. Wafer caramels oat cake chocolate cake
              pastry soufflé. Ice cream chupa chups cotton candy carrot cake sugar plum cake carrot cake cookie bear
              claw. Carrot cake cotton candy sweet roll liquorice lemon drops lemon drops ice cream jelly beans
              fruitcake.
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCustomizedVertical
