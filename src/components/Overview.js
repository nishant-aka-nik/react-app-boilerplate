import React from 'react';
import { getAllContacts } from '../Data';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const Overview = () => {
  const OverviewData = getAllContacts();

  return (
    <Box component="section">
      <Grid container spacing={1} padding={1}>
        {OverviewData.map(dataObj => (
          <Grid item xs={12} sm={6} md={4} key={dataObj.id} >
            <Card orientation="vertical" size="sm">
              <Box>
                <Typography level="h3" fontSize="lg" fontWeight="bold">
                  {dataObj.name}
                </Typography>
                <Typography level="title-md" color="text.secondary">
                  Phone: {dataObj.number}
                </Typography>
                <Typography level="body-md" color="text.secondary">
                  Email: {dataObj.email}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;