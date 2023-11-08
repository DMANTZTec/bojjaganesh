import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    count: 809680,
    language: "Telugu",
  },
  {
    count: 4555697,
    language: "Hindi",
  },
  {
    count: 12345657,
    language: "English",
  },
]

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          cx="70%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="30%"
          outerRadius="50%"
          dataKey="count"
        >
          <Cell name="Telugu" fill="green" />
          <Cell name="Hindi" fill="black" />
          <Cell name="English" fill="brown" />
        </Pie>
        <Tooltip/>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent