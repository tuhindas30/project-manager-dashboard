import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  PieLabelRenderProps,
  Legend,
} from "recharts";
import data from "../data/budget.json";
import { Grid2, styled, Typography } from "@mui/material";

const StyledCard = styled(Grid2)(() => ({
  padding: "1rem",
  boxShadow: "5px 5px 10px 5px rgba(0,0,0,0.1)",
  borderRadius: "0.25rem",
  minWidth: "10rem",
  "& .cardTitle": {
    marginBottom: "1rem",
  },
  "& .pie": {
    "& .recharts-pie-label-line": {
      display: "none",
    },
  },
}));

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  const RADIAN = Math.PI / 180;
  if (!innerRadius || !outerRadius) return "";
  const radius =
    (innerRadius as number) +
    ((outerRadius as number) - (innerRadius as number)) * 0.2;
  const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
  const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={"0.5rem"}
      textAnchor={x > (cx as number) ? "start" : "end"}
      dominantBaseline="central">
      {`${(percent! * 100).toFixed(0)}%`}
    </text>
  );
};

const BudgetChart = () => {
  const COLORS = ["#e40000", "#788cd1", "#00dbc2"];
  return (
    <StyledCard size={6}>
      <Typography className="cardTitle">Budget</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            className="pie"
            label={renderCustomizedLabel}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </StyledCard>
  );
};

export default BudgetChart;
