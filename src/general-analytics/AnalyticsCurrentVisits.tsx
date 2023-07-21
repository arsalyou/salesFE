import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { ApexOptions } from "apexcharts";

// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../utils/formatNumber';
//
import { BaseOptionChart } from '../components/charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [4344, 5435, 1443];

export default function AnalyticsCurrentVisits() {
  const theme = useTheme();

  const salesData = useSelector((state: any) => state.stats);
  const [sales, setSales] = useState([]);
  const [categories, setCategories] = useState([]);


  // useEffect(()=>{
  //   const chartData: any = [];
  //   salesData.forEach((sale: any, index: number) =>{
  //     let monthlySales = sale.monthlyData.map((monthSale: any) => {
  //       return monthSale?.saleStats?.totalSales
  //     })
  //     let year = sale?.year;
  //     chartData.push({
  //       name: year,
  //       type: CHART_DATA_TYPES[index],
  //       data:monthlySales,
  //     })
  //   })
  //   setYearData(chartData)

  // },[salesData])
  const chartOptions: any = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      // theme.palette.chart.blue[0],
      // theme.palette.chart.violet[0],
      // theme.palette.chart.yellow[0],
    ],
    labels: ['Electronics', 'Books', 'Home'],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName: any) => fNumber(seriesName),
        title: {
          formatter: (seriesName: string) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <Card>
      <CardHeader title="Sales By Category" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}
