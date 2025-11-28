import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getContact } from '../Data';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import CircularProgress from '@mui/joy/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const itemData = getContact(uid);

  if (!itemData) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography level="h3">Item not found</Typography>
        <Button onClick={() => navigate(-1)} startDecorator={<ArrowBackIcon />}>
          Back
        </Button>
      </Box>
    );
  }

  // Calculate synced services
  const syncedCount = itemData.service_info.filter(service => service.status === 'SYNCED').length;
  const totalCount = itemData.service_info.length;
  const syncPercentage = totalCount > 0 ? (syncedCount / totalCount) * 100 : 0;
  const notSyncedCount = itemData.service_info.filter(service => service.status === 'NOT_SYNCED').length;
  const notFoundCount = itemData.service_info.filter(service => service.status === 'NOT_FOUND').length;

  return (
    <Box component="section" sx={{ paddingBottom: '80px' }}>
      <Box sx={{ padding: 2, position: 'sticky', top: 0, bgcolor: 'background.body', zIndex: 100 }}>
        <Button 
          onClick={() => navigate(-1)} 
          startDecorator={<ArrowBackIcon />}
          variant="soft"
          sx={{ mb: 2 }}
        >
          Back
        </Button>

        {/* Dashboard Card */}
        <Card 
          orientation="horizontal" 
          variant="outlined"
          sx={{ 
            mb: 2, 
            p: 3,
            background: 'linear-gradient(to right, #f0f4ff, #e8f5e9)',
            borderRadius: 'lg'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, width: '100%', justifyContent: 'space-between' }}>
            {/* Left Side - Object Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography level="h2" fontWeight="bold">
                {itemData.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box>
                  <Typography level="body-xs" color="text.tertiary">
                    Tenant
                  </Typography>
                  <Typography level="body-md" fontWeight="md">
                    {itemData.tenant}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="body-xs" color="text.tertiary">
                    Namespace
                  </Typography>
                  <Typography level="body-md" fontWeight="md">
                    {itemData.namespace}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography level="body-xs" color="text.tertiary">
                  UID
                </Typography>
                <Typography level="body-sm" fontWeight="md">
                  {itemData.uid}
                </Typography>
              </Box>
            </Box>

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
                    Total Services
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    All watching services
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
                    {notSyncedCount}
                  </Typography>
                </Box>
                <Box>
                  <Typography level="title-lg" fontWeight="bold" color="warning">
                    Not Synced
                  </Typography>
                  <Typography level="body-sm" color="text.secondary">
                    Services with differences
                  </Typography>
                </Box>
              </Box>

              {notFoundCount > 0 && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: '50%', 
                    bgcolor: 'danger.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Typography level="h3" fontWeight="bold" color="danger">
                      {notFoundCount}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography level="title-lg" fontWeight="bold" color="danger">
                      Not Found
                    </Typography>
                    <Typography level="body-sm" color="text.secondary">
                      Services not available
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Card>
      </Box>

      <Grid container spacing={2} padding={2}>
        {itemData.service_info.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              orientation="vertical" 
              size="sm"
              variant="outlined"
              sx={{
                borderColor: service.status === 'NOT_SYNCED' ? 'warning.outlinedBorder' : service.status === 'NOT_FOUND' ? 'danger.outlinedBorder' : 'success.outlinedBorder',
                height: '100%'
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography level="title-lg" fontWeight="bold">
                    {service.service_name}
                  </Typography>
                  <Chip 
                    color={service.status === 'NOT_SYNCED' ? 'warning' : service.status === 'NOT_FOUND' ? 'danger' : 'success'}
                    size="sm"
                  >
                    {service.status}
                  </Chip>
                </Box>

                {service.err && service.err !== "" && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm" color="danger" sx={{ mb: 1 }}>
                      <strong>Error:</strong> {service.err}
                    </Typography>
                  </>
                )}

                {service.diff && Object.keys(service.diff).length > 0 && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <Button
                      variant="soft"
                      color="warning"
                      size="sm"
                      fullWidth
                      onClick={() => navigate('/diff-viewer', { 
                        state: { 
                          serviceName: service.service_name,
                          diff: service.diff 
                        } 
                      })}
                    >
                      View Differences ({Object.keys(service.diff).length})
                    </Button>
                  </>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
