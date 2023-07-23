import { merge } from 'lodash';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
import { fNumber } from '../utils/formatNumber';
import { BaseOptionChart } from '../components/charts';
import { useSelector } from 'react-redux';


export default function ActualVsTargetSales() {

  const salesData = useSelector((state: any) => state.stats);
  const [sales, setSales] = useState<any>([]);
  const [products, setProducts] = useState<string[]>([]);

  useEffect(()=>{
    const localProducts: string[] = [];
    const yearlySales : number[] = [];
    const targetSales : number[] = [];

    salesData?.forEach((sale: any, index: number) =>{

      localProducts.push(sale?.productID?.name);
      yearlySales.push(sale?.yearlySalesTotal);
      targetSales.push(sale?.targetSales);
    })
    setProducts(localProducts);
    setSales([{name: 'Actual Sales' , data: yearlySales}, {name: 'Target Sales' , data: targetSales}]);

  },[salesData])


  const chartOptions: any = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
     
    },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: any) => fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      }
    },
    plotOptions: {
      bar: { horizontal: false, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: products,
    }
  });


  return (
    <Card>
      <CardHeader title="Actual VS Target Sales"  />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={sales}  options={chartOptions}  height={364} />
      </Box>
    </Card>
  );
}
