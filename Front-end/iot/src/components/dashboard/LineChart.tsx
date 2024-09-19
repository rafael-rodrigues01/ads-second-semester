'use client'
import React, {useState, useEffect} from "react";
import { Chart } from 'primereact/chart'


export default function LineChart () {
  const [ chartData, setChartData ] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun'],
        datasets: [
            {
                label: 'Produção',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [4, 5, 9, 2, 9, 4, 8],
                fill: true,
                tension: 0.4
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
    };

    setChartData(data);
    setChartOptions(options);
}, []);


  return (
    <Chart type="line" data={chartData} options={chartOptions} className="w-full"/>
  )
}