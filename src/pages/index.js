// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import CardProfilsVerticalComponent from 'src/@core/components/card-statistics/card-affiche-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>

        {/* Add films line */}
        <Grid item md={6} lg={12}>
            <Grid container spacing={6}>
                <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '1'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>
                   
                <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '2'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>

                  <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '3'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>
                   
                <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '4'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>

                <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '5'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>
                   
                <Grid item lg={2} xs={12} >
                    <CardProfilsVerticalComponent
                    avatar = ""
                    name ="John Doe"
                    numbersMovies= '6'
                    subtitle = "Cinephile"
                    picture = ""
                   />
                </Grid>

            </Grid>
        
        </Grid>

        
        {/* 1st line */}
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>


        {/* 2nd line */}
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>

        </Grid>
        
        {/* 3rd line */}
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        {/* 4th line */}
        <Grid item xs={12}>
          <Table />
        </Grid>

      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
