import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getDataByObjectType } from '../Data'; // Import the new function

const ObjectDetails = () => {
  const { objectType } = useParams();
  const navigate = useNavigate();

  const handleServiceClick = (uid) => {
    navigate(`/services/${uid}`);
  };

  const data = getDataByObjectType(objectType);
  const items = data?.items || [];

  // Calculate synced objects (all services are SYNCED)
  const syncedCount = items.filter(item => 
    item.service_info && item.service_info.every(service => service.status === 'SYNCED')
  ).length;
  const totalCount = items.length;
  const syncPercentage = totalCount > 0 ? (syncedCount / totalCount) * 100 : 0;

  return (
    <Box component="section" sx={{ paddingBottom: '80px' }}>
      <Box sx={{ padding: 2 }}>
        <Button 
          onClick={() => navigate('/')} 
          startDecorator={<ArrowBackIcon />}
          variant="soft"
          sx={{ mb: 2 }}
        >
          Back to Home
        </Button>
        <Typography level="h2" sx={{ mb: 1 }}>
          {decodeURIComponent(objectType)}
        </Typography>

        {/* Dashboard Card */}
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
                value={syncPercentage}
                sx={{
                  '--CircularProgress-size': '120px',
                  '--CircularProgress-trackThickness': '12px',
                  '--CircularProgress-progressThickness': '12px',
                }}
              >
                <Typography level="h2" fontWeight="bold">
                  {syncPercentage.toFixed(0)}%
                </Typography>
              </CircularProgress>
              <Typography level="body-sm" fontWeight="bold" color="neutral">
                Sync Status
              </Typography>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography level="h3" fontWeight="bold" color="primary">
                    {totalCount}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="title-lg" fontWeight="bold">
                    Total Objects
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    All objects in this type
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  borderRadius: '50%', 
                  bgcolor: 'success.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircleIcon sx={{ fontSize: 28, color: 'success.500' }} />
                </Box>
                <Box>
                  <Typography level="title-lg" fontWeight="bold" color="success">
                    {syncedCount} Synced
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Completely synchronized
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  borderRadius: '50%', 
                  bgcolor: 'warning.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography level="h3" fontWeight="bold" color="warning">
                    {totalCount - syncedCount}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="title-lg" fontWeight="bold" color="warning">
                    Pending Sync
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Objects with sync issues
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      <Grid container spacing={1} padding={1}>
        {items.map((dataObj) => {
          const isFullySynced = dataObj.service_info && dataObj.service_info.every(service => service.status === 'SYNCED');
          
          return (
            <Grid item xs={12} sm={6} md={4} key={dataObj.uid}>
              <Card 
                orientation="vertical" 
                size="sm"
                sx={{
                  background: isFullySynced 
                    ? 'linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%)' 
                    : 'linear-gradient(135deg, #fffbf0 0%, #fff4e0 100%)',
                  borderLeft: isFullySynced ? '4px solid' : '4px solid',
                  borderLeftColor: isFullySynced ? 'success.400' : 'warning.400',
                }}
              >
                <Box>
                  <Typography level="body-xs" color="text.tertiary" sx={{ mb: 0.5 }}>
                    Object Name
                  </Typography>
                  <Typography level="h3" fontSize="lg" fontWeight="bold">
                    {dataObj.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Typography level="body-xs" color="text.tertiary">
                      Watching Services:
                    </Typography>
                    <Typography 
                      level="body-sm" 
                      color="warning" 
                      sx={{ 
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                      onClick={() => handleServiceClick(dataObj.uid)}
                    >
                      {dataObj.service_info?.length || 0}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {items.length === 0 && (
        <Box sx={{ padding: 2 }}>
          <Typography level="body-md" color="text.secondary">
            No items found for this object type.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ObjectDetails;
