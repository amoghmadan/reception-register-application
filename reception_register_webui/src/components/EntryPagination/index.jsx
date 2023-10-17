import { Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";

import { ListEntryContext } from "../../state/context/ListEntryProvider";

export default function EntryPagination() {
  const { setFilters } = useContext(ListEntryContext);
  const [today, setToday] = useState(0);

  useEffect(() => {
    const updateFilters = () => setFilters({ date: getDate() });
    updateFilters();
  }, [today]);

  const getDate = () => {
    let date = new Date();
    date = new Date(date.setDate(date.getDate() + today));
    const dateString = date.toISOString().split("T")[0];
    return dateString;
  };

  const onPageChange = (step) => (e) => {
    e.preventDefault();
    setToday((current) => current + step);
  };

  return (
    <Box textAlign="center">
      <Container>
        <Grid container spacing={0}>
          <Grid textAlign="right" item xs={4}>
            <ArrowBackIos onClick={onPageChange(-1)} />
          </Grid>
          <Grid item xs={4}>
            <Typography>{getDate()}</Typography>
          </Grid>
          <Grid textAlign="left" item xs={4}>
            <ArrowForwardIos onClick={onPageChange(1)} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
