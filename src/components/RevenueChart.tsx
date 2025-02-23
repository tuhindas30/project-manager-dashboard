import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../data/revenue.json";
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

const RevenueChart = () => {
  return (
    <StyledCard size={6}>
      <Typography className="cardTitle">Total Revenue</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data.week}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledCard>
  );
};

export default RevenueChart;
