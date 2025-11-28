import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllContacts } from '../Data';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const Overview = () => {
  const OverviewData = getAllContacts();
  const navigate = useNavigate();

  const handleServiceClick = (uid) => {
    navigate(`/services/${uid}`);
  };

  return (
    <Box component="section">
      <Grid container spacing={1} padding={1}>
        {OverviewData.map(dataObj => (
          <Grid item xs={12} sm={6} md={4} key={dataObj.uid} >
            <Card orientation="vertical" size="sm">
              <Box >
                <Typography level="h3" fontSize="lg" fontWeight="bold">
                  Object Name: {dataObj.name}
                </Typography>
                <Typography level="title-md" color="text.secondary">
                  Tenant: {dataObj.tenant}
                </Typography>
                <Typography level="body-md" color="text.secondary">
                  Namespace: {dataObj.namespace}
                </Typography>
                <Typography level="body-sm" color="text.secondary" sx={{ mt: 1 }}>
                  UID: {dataObj.uid}
                </Typography>
                <Typography 
                  level="body-sm" 
                  color="warning" 
                  sx={{ 
                    mt: 1, 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    '&:hover': {
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }
                  }}
                  onClick={() => handleServiceClick(dataObj.uid)}
                >
                  Watching Services: {dataObj.service_info.length} 
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