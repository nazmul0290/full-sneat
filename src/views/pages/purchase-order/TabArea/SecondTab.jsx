import { Download } from '@mui/icons-material'
import { Button, Grid , Typography } from '@mui/material'
import { Box } from '@mui/system'
import GridInput from 'src/@core/components/FormFields/GridInput'
import { useGetCountryQuery, useGetDistrictsQuery, useGetStatesQuery, useGetStreetsQuery, useGetThanasQuery, useGetUnionsQuery, useGetZipcodeQuery } from 'src/store/services/vendor'

const { default: GridAutocomplete } = require('src/@core/components/FormFields/GridAutocomplete')

const SecondTab = () => {
    //redux
    const {data} = useGetCountryQuery("vendor");
    const states = useGetStatesQuery("BD")
    const districts = useGetDistrictsQuery("1")
    const thanas = useGetThanasQuery("1")
    const unions = useGetUnionsQuery("1")
    const zips = useGetZipcodeQuery("1")
    const streets = useGetStreetsQuery("1")
    console.log(states, districts, thanas, unions, zips, streets)




  return (
    <Grid container spacing={4}>
      <Grid item container xs={6}>
        <Typography variant='h6' color={'secondary'} sx={{ marginBottom: '20px' }}>
          Billing Address
        </Typography>
        <GridInput label={'Attention'} cols={[3, 6]} />
        <GridAutocomplete label={'Country'} options={data?.data} variable_name="country_name" cols={[3, 6]} />
        <GridAutocomplete label={'State'} cols={[3, 6]} />
        <GridAutocomplete label={'District'} cols={[3, 6]} />
        <GridAutocomplete label={'City/Thana'} cols={[3, 6]} />
        <GridAutocomplete label={'Union/Village'} cols={[3, 6]} />
        <GridAutocomplete label={'Zipcode'} cols={[3, 6]} />
        <GridAutocomplete label={'Street Address 1'} cols={[3, 6]} />
        <GridInput label={'Street Address 2'} cols={[3, 6]} />
        <GridInput label={'Phone'} cols={[3, 6]} />
        <GridInput label={'Fax'} cols={[3, 6]} />
      </Grid>
      <Grid item container xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '30px' }}>
          <Typography variant='h6' color={'secondary'} sx={{ marginBottom: '20px' }}>
            Shipping Address
          </Typography>
          <Button variant='text' startIcon={<Download />}>
            Copy Billing Address
          </Button>
        </Box>
        <GridInput label={'Attention'} cols={[3, 6]} />
        <GridAutocomplete label={'Country'} addNew={true} options={[{ label: 'one' }]} cols={[3, 6]} />
        <GridAutocomplete label={'State'} addNew cols={[3, 6]} />
        <GridAutocomplete label={'District'} addNew cols={[3, 6]} />
        <GridAutocomplete label={'City/Thana'} cols={[3, 6]} />
        <GridAutocomplete label={'Union/Village'} cols={[3, 6]} />
        <GridAutocomplete label={'Zipcode'} cols={[3, 6]} />
        <GridAutocomplete label={'Street Address 1'} cols={[3, 6]} />
        <GridInput label={'Street Address 2'} cols={[3, 6]} />
        <GridInput label={'Phone'} cols={[3, 6]} />
        <GridInput label={'Fax'} cols={[3, 6]} />
      </Grid>
    </Grid>
  )
}

export default SecondTab
