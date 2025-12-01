import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getDataByObjectType } from '../Data';

const objectTypes = [
  "ves.io.schema.service_policy",
  "ves.io.vega.cfg.user_roles",
  "ves.io.schema.quota",
  "ves.io.schema.tenant",
  "ves.io.schema.saas_config",
  "ves.io.schema.api_credential",
  "ves.io.schema.namespace"
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (objectType) => {
    navigate(`/objects/${encodeURIComponent(objectType)}`);
  };

  // Calculate overall statistics
  let totalObjects = 0;
  let totalSyncedObjects = 0;
  
  objectTypes.forEach(objectType => {
    const data = getDataByObjectType(objectType);
    const items = data?.items || [];
    totalObjects += items.length;
    
    const syncedCount = items.filter(item => 
      item.service_info && item.service_info.every(service => service.status === 'SYNCED')
    ).length;
    totalSyncedObjects += syncedCount;
  });

  const overallSyncPercentage = totalObjects > 0 ? (totalSyncedObjects / totalObjects) * 100 : 0;

  return (
    <Box component="section" sx={{ padding: 2 }}>
      <Typography level="h2" sx={{ mb: 2 }}>
        Eywa Dashboard
      </Typography>

      {/* Overall Dashboard Card */}
      <Card 
        orientation="horizontal" 
        variant="outlined"
        sx={{ 
          mb: 3, 
          p: 3,
          background: 'linear-gradient(to right, #f0f4ff, #e8f5e9)',
          borderRadius: 'lg'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, width: '100%', justifyContent: 'space-around' }}>
          {/* Circular Progress */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <CircularProgress 
              size="lg" 
              determinate 
              value={overallSyncPercentage}
              sx={{
                '--CircularProgress-size': '140px',
                '--CircularProgress-trackThickness': '14px',
                '--CircularProgress-progressThickness': '14px',
              }}
            >
              <Typography level="h1" fontWeight="bold">
                {overallSyncPercentage.toFixed(0)}%
              </Typography>
            </CircularProgress>
            <Typography level="body-md" fontWeight="bold" color="neutral">
              Overall Sync Status
            </Typography>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'neutral.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography level="h2" fontWeight="bold" color="neutral">
                    {objectTypes.length}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="h4" fontWeight="bold">
                    Tables
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Database tables
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography level="h2" fontWeight="bold" color="primary">
                    {totalObjects}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="h4" fontWeight="bold">
                    Total Objects
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Across all types
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'success.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircleIcon sx={{ fontSize: 32, color: 'success.500' }} />
                </Box>
                <Box>
                  <Typography level="h4" fontWeight="bold" color="success">
                    {totalSyncedObjects} Synced
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Fully synchronized
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'warning.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography level="h2" fontWeight="bold" color="warning">
                    {totalObjects - totalSyncedObjects}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="h4" fontWeight="bold" color="warning">
                    Pending Sync
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Need attention
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>

      <Typography level="h3" sx={{ mb: 2 }}>
        Objects in DB
      </Typography>
      <Grid container spacing={2}>
        {objectTypes.map((objectType, index) => {
          const data = getDataByObjectType(objectType);
          const items = data?.items || [];
          const syncedCount = items.filter(item => 
            item.service_info && item.service_info.every(service => service.status === 'SYNCED')
          ).length;
          const isFullySynced = items.length > 0 && syncedCount === items.length;

          return (
            <Grid item xs={12} sm={6} md={4} key={objectType}>
              <Card
                variant="outlined"
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: isFullySynced 
                    ? 'linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%)' 
                    : 'linear-gradient(135deg, #fffbf0 0%, #fff4e0 100%)',
                  borderLeft: '4px solid',
                  borderLeftColor: isFullySynced ? 'success.400' : 'warning.400',
                  '&:hover': {
                    boxShadow: 'md',
                    transform: 'translateY(-4px)',
                  }
                }}
                onClick={() => handleCardClick(objectType)}
              >
                <CardContent>
                  <Typography level="title-md" fontWeight="bold">
                    {objectType}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Typography level="body-xs" color="text.tertiary">
                      {items.length} objects
                    </Typography>
                    <Typography level="body-xs" color={isFullySynced ? "success" : "warning"} fontWeight="bold">
                      {syncedCount}/{items.length} synced
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
