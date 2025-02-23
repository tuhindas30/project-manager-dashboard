import {
  Avatar,
  Grid2,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";

interface BudgetCardProps {
  name: string;
  description: string;
  budget: number;
  profitability: number;
  actualHours: number;
  totalHours: number;
}

const StyledCard = styled(Grid2)(() => ({
  padding: "1rem",
  boxShadow: "5px 5px 10px 5px rgba(0,0,0,0.1)",
  borderRadius: "0.25rem",
  minWidth: "20rem",
  "& .description": {
    fontSize: "0.8rem",
    color: "rgba(0,0,0,0.5)",
  },
  "& .progress": {
    marginBlock: "0.5rem",
    padding: "0.5rem",
    borderRadius: "10rem",
  },
}));

const BudgetCard = ({
  name,
  description,
  budget,
  profitability,
  actualHours,
  totalHours,
}: BudgetCardProps) => {
  const getProgressColor = () => {
    const diff = totalHours - actualHours;
    if (diff > 0) return "error";
    return "success";
  };

  return (
    <StyledCard>
      <Grid2 justifyContent={"space-between"} marginBottom={"1rem"} container>
        <Grid2>
          <Typography variant="h6">{name}</Typography>
          <Typography className="description">{description}</Typography>
        </Grid2>
        <Avatar alt="Mario" src="https://picsum.photos/200" />
      </Grid2>
      <Typography className="description">Total Budget: {budget}</Typography>
      <Typography className="description">
        Profitability(100%): {profitability}
      </Typography>
      <LinearProgress
        className="progress"
        variant="determinate"
        color={getProgressColor()}
        value={100}
      />
      <Grid2 justifyContent={"space-between"} container>
        <Typography className="description">
          Actual hours: {actualHours}
        </Typography>
        <Typography className="description">
          {totalHours > actualHours
            ? `${totalHours - actualHours} hours over Budget`
            : `${actualHours - totalHours} add hours`}
        </Typography>
      </Grid2>
    </StyledCard>
  );
};

export default BudgetCard;
