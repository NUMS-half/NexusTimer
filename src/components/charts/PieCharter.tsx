import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

export default function PieCharter({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
        />
        <Tooltip contentStyle={{ borderRadius: 10 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
