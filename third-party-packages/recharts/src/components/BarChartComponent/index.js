import './index.css'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid
  } from "recharts"
  
  const data = [
    {
      course:"Python",
      students: 1000 ,
      lecturers:500
    },
    {
        course:"HTML",
        students: 700,
        lecturers:300
    },
    {
        course:"Javascript",
        students: 150,
        lecturers:200
    },
    {
        course:"SQL",
        students: 300,
        lecturers:600
    },
    {
        course:"React",
        students: 500,
        lecturers:100
    }
  ]
  
  const BarChartComponent = () =>{
    const DataFormatter=(number)=>{
        if(number>=1000){
            return `${(number/1000).toString()}k`
        }
        return number.toString()
    }
    return(
      <div className="app-container">
        <h1 className="title">Institute Details</h1>
        <ResponsiveContainer width="80%" height={500}>
          <BarChart data={data} margin={{top:50}}>
              <CartesianGrid strokeDasharray="3 3" fill="white"/>
              <XAxis dataKey={'course'} tick={{stroke:"black",strokeWidth:1}}/>
              <YAxis tickFormatter={DataFormatter}/>
              <Tooltip/>
              <Legend
                wrapperStyle={{
                 padding: 30,
                }}
                />
              <Bar dataKey={"students"} fill="green" name="Students"/>
              <Bar dataKey={"lecturers"} fill="black" name="Lecturers"/>
          </BarChart >
        </ResponsiveContainer>
      </div>
      )
  }
  
  export default BarChartComponent