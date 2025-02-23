import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Grid2, styled, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import RevenueChart from "./components/RevenueChart";
import BudgetChart from "./components/BudgetChart";

const headerCardData = [
  {
    id: 1,
    name: "Total Projects",
    value: 5,
    icon: AppsOutlinedIcon,
  },
  {
    id: 2,
    name: "Completed",
    value: 1,
    icon: TaskAltOutlinedIcon,
  },
  {
    id: 3,
    name: "Ongoing",
    value: 2,
    icon: AutorenewOutlinedIcon,
  },
  {
    id: 4,
    name: "Delayed",
    value: 1,
    icon: ReportProblemOutlinedIcon,
  },
  {
    id: 5,
    name: "Employees",
    value: 5,
    icon: GroupOutlinedIcon,
  },
];

const StyledCard = styled(Grid2)(() => ({
  padding: "1rem",
  boxShadow: "5px 5px 10px 5px rgba(0,0,0,0.1)",
  borderRadius: "0.25rem",
  minWidth: "10rem",
  "& .cardTitle": {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  "& .cardDescription": {
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.5)",
  },
}));

function App() {
  return (
    <>
      <Navbar />
      <Box style={{ padding: "2rem" }}>
        <Grid2 size={9} container>
          <Grid2>
            <Grid2 gap={2} marginBottom={"2rem"} container>
              {headerCardData.map((item) => {
                const Icon = item.icon;
                return (
                  <StyledCard key={item.id}>
                    <Icon />
                    <Typography className="cardTitle">{item.value}</Typography>
                    <Typography className="cardDescription">
                      {item.name}
                    </Typography>
                  </StyledCard>
                );
              })}
            </Grid2>
            <Grid2 wrap="nowrap" gap={2} container>
              <RevenueChart />
              <BudgetChart />
            </Grid2>
          </Grid2>
          <Grid2></Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default App;
