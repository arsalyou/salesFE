// material
import React, { useEffect, useState } from "react";
import { Box, Grid, Container, Typography } from '@mui/material';
import { loadStats, loadVisitors } from './actions';
import { useDispatch } from "react-redux";
import ThemeConfig from "./theme";
import {Button} from "@mui/material";
import {
  AnalyticsNewUsers,
  AnalyticsBugReports,
  AnalyticsItemOrders,
  AnalyticsWeeklySales,
  AnalyticsPercentPieChart,
  AnalyticsWebsiteVisits,
  AnalyticsConversionRates,
  SalesConversionRate,
  ActualVsTargetSales,
  AnalyticsProfitTime,
  AnalyticsRadial,
  AnalyticsGeoHeatMap,
} from './general-analytics';

// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    console.log('dispatching')
    dispatch(loadStats());
    dispatch(loadVisitors());
  }, [dispatch]);



  return (
    <ThemeConfig themePref={darkMode ? 'dark' : 'light'}>

      <Container>
       
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ p: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>

        </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ p: 5 }}>
            <Button  onClick={()=> {setDarkMode(!darkMode)}}>Toggle Mode</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsNewUsers />
          </Grid>
         <Grid item xs={12} sm={6} md={3}>
            <AnalyticsItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsBugReports />
          </Grid>
  
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits />
          </Grid>
  
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsPercentPieChart dataType='Category' />
          </Grid> 
 
          <Grid item xs={12} md={12} lg={12}>
            <AnalyticsConversionRates />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
          <ActualVsTargetSales/>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
          <AnalyticsRadial  dataType='Ages'/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
          <AnalyticsPercentPieChart dataType='Gender' />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
          <AnalyticsProfitTime/>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
          <AnalyticsRadial  dataType='Analytics'/>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
          <AnalyticsGeoHeatMap/>
          </Grid>


          
        
        </Grid>
      </Container>
      </ThemeConfig>

  );
}
