
import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../components/charts';

// ----------------------------------------------------------------------

// interface SalesData {
//   product: string;
//   salesRevenue: number;
// }

const CHART_DATA_TYPES = ['column', 'area', 'line' ];

const AnalyticsWebsiteVisits: React.FC = () =>  {
  const salesData = useSelector((state: any) => state.stats);
  const [yearData, setYearData] = useState([]);

  useEffect(()=>{
    const chartData: any = [];
    salesData.forEach((sale: any, index: number) =>{
      let monthlySales = sale.monthlyData.map((monthSale: any) => {
        return monthSale?.saleStats?.totalSales
      })
      let year = sale?.year;
      chartData.push({
        name: year,
        type: CHART_DATA_TYPES[index],
        data:monthlySales,
      })
    })
    setYearData(chartData)

  },[salesData])
  

  const chartOptions: any = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '14%' } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== 'undefined') {
            return `$${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Monthly Sales" subheader="of last three years" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={yearData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

export default AnalyticsWebsiteVisits;
