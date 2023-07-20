// material
import React, { useEffect } from "react";
import { Box, Grid, Container, Typography } from '@mui/material';
import { loadStats } from './actions';
import { useDispatch } from "react-redux";
import {
  AnalyticsNewUsers,
  AnalyticsBugReports,
  AnalyticsItemOrders,
  AnalyticsWeeklySales,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsConversionRates
} from './general-analytics';

// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('dispatching')
    dispatch(loadStats());
  }, [dispatch]);

  return (
      <Container>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
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
            <AnalyticsCurrentVisits />
          </Grid> 
 
          <Grid item xs={12} md={12} lg={12}>
            <AnalyticsConversionRates />
          </Grid>
 
        
        </Grid>
      </Container>
  );
}
