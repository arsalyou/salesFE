
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

const SalesConversionRate: React.FC = () =>  {
  const conversionData = useSelector((state: any) => state.visits);

  const [yearData, setYearData] = useState<string[]>([]);
  const [percentages, setPercentages] = useState<any[]>([]);

  useEffect(() => {
    const years: string[] = [];
    const saleRatios: any[] = [];

    conversionData?.forEach((sale: any, index: number) => {
     if(years.length < 5 && !years.includes(sale.year)){
        years.push(sale.year);
        
        const percentR = parseInt(sale.totalLeadsGenerated)/parseInt(sale.totalVisitors)*100;
        saleRatios.push({
            name: 2010,
            type: 'column',
            data:percentR,
          })
     }
    })
    setYearData(years);
    setPercentages(saleRatios);

  }, [conversionData])
  
  console.log(percentages, yearData);

  const chartOptions: any = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '14%' } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: yearData,
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
        <ReactApexChart  type="line" series={percentages} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

export default SalesConversionRate;
