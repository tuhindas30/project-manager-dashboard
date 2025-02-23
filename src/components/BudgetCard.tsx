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
}

const StyledCard = styled(Grid2)(() => ({
  padding: "1rem",
  boxShadow: "5px 5px 10px 5px rgba(0,0,0,0.1)",
  borderRadius: "0.25rem",
  minWidth: "20rem",
}));

const BudgetCard = ({
  name,
  description,
  budget,
  profitability,
}: BudgetCardProps) => {
  return (
    <StyledCard>
      <Grid2 justifyContent={"space-between"} marginBottom={"1rem"} container>
        <Grid2>
          <Typography>{name}</Typography>
          <Typography fontSize={"0.8rem"}>{description}</Typography>
        </Grid2>
        <Avatar alt="Mario" src="/static/images/avatar/1.jpg" />
      </Grid2>
      <Typography fontSize={"0.8rem"}>Total Budget: {budget}</Typography>
      <Typography fontSize={"0.8rem"}>
        Profitability(100%): {profitability}
      </Typography>
      <LinearProgress variant="determinate" value={100} />
    </StyledCard>
  );
};

export default BudgetCard;
