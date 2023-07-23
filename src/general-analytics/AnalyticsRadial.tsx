
import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../components/charts';

// ----------------------------------------------------------------------

interface data {
  dataType: string;
}


const AnalyticsRadial = (props: data) => {
  console.log('props', props)
  const salesData = useSelector((state: any) => state.stats);
  const visitorData = useSelector((state: any) => state.visits);
  const [title, setTitle] =  useState<string>('');
  const [percents, setPercentages] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);


  useEffect(() => {
    const chartData: any = [];
    if (props.dataType === 'Ages') {
      let young = 0, mid = 0, old = 0;
      salesData.forEach((sale: any, index: number) => {
        const percentages = [], marks = [];
        sale?.customerIDs?.forEach((customer: any) => {
          if (customer.age < 20)
            young++;
          else if (customer.age < 45)
            mid++;
          else
            old++;
        })
      });
      const total = young + mid + old; 
      young = Math.round((young/total)* 100);
      mid = Math.round((mid/total)* 100);
      old = Math.round((old/total)* 100);

      setPercentages([young, mid, old]);
      setLabels(['<18', '<45', '<75']);
      setTitle('Sales by Age');
    } else if (props.dataType === 'Analytics'){
      const years: string[] = [];
      const saleRatios: number[] = [];
      visitorData.forEach((visitor: any) => {
        if(years.length < 3 && !years.includes(visitor.year)){
          years.push(visitor.year);
          const percentR = Math.round((visitor.totalLeadsGenerated)/(visitor.totalVisitors)*100);
          saleRatios.push(percentR);
        }
          
         
      });
      setPercentages(saleRatios);
      setLabels(years);
      setTitle('Percentage of lead conversion');

      console.log(years, saleRatios)
    }

  }, [props, salesData, visitorData ])


  const chartOptions: any = {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#0077B5'],
    labels: labels,
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + ' %'
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  return (
    <Card>
      <CardHeader title={title} subheader="of three years" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="radialBar" height={390} series={percents} options={chartOptions} />
      </Box>
    </Card>
  );
}

export default AnalyticsRadial;
