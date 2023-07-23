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

export default function AnalyticsPercentPieChart(props: any) {
  const theme = useTheme();

  const salesData = useSelector((state: any) => state.stats);
  const [sales, setSales] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [title, setTitle] = useState<string>();
  


  useEffect(() => {
    console.log('dataType', props?.dataType);
    if (props?.dataType === 'Gender') {
      let maleCount = 0, femaleCount = 0;
      salesData.forEach((sale: any, index: number) => {
        sale.customerIDs.forEach((customer: any) => {
          if(customer.gender === 'M'){
            maleCount++;
          }else{
            femaleCount++;
          }
        })
      });
      setCategories(['Male', 'Female']);
      setSales([maleCount, femaleCount]);
    } else {
      const localCategories: string[] = [];
      const yearlySales: number[] = [];
      salesData.forEach((sale: any, index: number) => {
        localCategories.push(sale?.productID?.category);
        yearlySales.push(sale?.yearlySalesTotal);
      })
      setCategories(localCategories);
      setSales(yearlySales);
    }
    setTitle("Sales by " + props?.dataType );


  }, [props, salesData])


  const chartOptions: any = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      // theme.palette.chart.blue[0],
      // theme.palette.chart.violet[0],
      // theme.palette.chart.yellow[0],
    ],
    labels: categories,
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
      <CardHeader title={title} />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={sales} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}
