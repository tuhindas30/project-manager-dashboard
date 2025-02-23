import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
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
}));

const BudgetChart = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <StyledCard size={6}>
      <Typography className="cardTitle">Budget</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value">
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </StyledCard>
  );
};

export default BudgetChart;
