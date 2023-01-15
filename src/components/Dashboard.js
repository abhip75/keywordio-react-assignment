import React,{useState} from "react";
import data from './Mock_Data.json';
import DataTable from 'react-data-table-component';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {

    const [visible, setVisible] = useState(false);


    const columns = [
        {
            name: 'Campaigns',
            selector: 'campaigns',
            sortable: true,
        },
        {
            name: 'Clicks',
            selector: 'clicks',
            sortable: true,
        },
        {
            name: 'Cost',
            selector: 'cost',
            sortable: true,
        },
        {
            name: 'Conversions',
            selector: 'conversions',
            sortable: true,
        },
        {
            name: 'Revenue',
            selector: 'revenue',
            sortable: true,
        },
    ];

  

    const  [chartDataInfo, setChartDataInfo] =  useState({
        all: [{gender: 'male', percentage: 45, color:"#fa8128"}, {gender: 'female', percentage: 35, color:"#00bfff"}, {gender: 'unknown', percentage: 25, color:"#000"}],
        male: [{gender: 'male', percentage: 45, color: "#fa8128"}],
        female: [{gender: 'female', percentage: 35 ,color: "#00bfff"}],
        unknown: [{gender: 'unknown', percentage: 25, color:"#000"}]
    });

    const [chartData, setChartData] = useState({
        labels: chartDataInfo["all"].map((oData) => oData.percentage +'% '+ oData.gender),
        datasets: [{
            data: chartDataInfo["all"].map((oData) => oData.percentage),
            backgroundColor: ['#fa8128', '#00bfff', '#000']
        }]
    });

    const handleChange = (e) => {
        setChartData({
            labels: chartDataInfo[e.target.value].map((oData) => oData.percentage +'% '+ oData.gender),
            datasets: [{
                data: chartDataInfo[e.target.value].map((oData) => oData.percentage),
                backgroundColor: chartDataInfo[e.target.value].map((oData) => oData.color),
            }]
        });
    }
      
    return(

        <div className="container">
            <div className="row">
                <div className="col-md-6 my-table">
                    <div className="card card-data shadow-sm">
                        <div className="card-header">
                            <button className="btn btn-success my-toggle" onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
                            Ad Insights
                        </div>

                        <div className="card-body">
                            <DataTable columns={columns} data={data}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 dougnhut-chart" style={{ display: visible ? 'block' : 'none' }}>
                    <div className="card doughnut-card shadow-sm">
                        <div className="card-header">
                            Ad Insights
                            <select onChange={(e) => handleChange(e)}>
                                <option value="all">All</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                        <div className="card-body">
                            <div className="chart-doughnut">
                                <Doughnut data={chartData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;