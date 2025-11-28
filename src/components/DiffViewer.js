import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chip from '@mui/joy/Chip';

const DiffViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceName, diff } = location.state || {};

  if (!diff || !serviceName) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography level="h3">No diff data available</Typography>
        <Button onClick={() => navigate(-1)} startDecorator={<ArrowBackIcon />}>
          Back
        </Button>
      </Box>
    );
  }

  const diffEntries = Object.entries(diff);

  return (
    <Box component="section" sx={{ padding: 2, paddingBottom: '80px' }}>
      <Button 
        onClick={() => navigate(-1)} 
        startDecorator={<ArrowBackIcon />}
        variant="soft"
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Typography level="h2" fontWeight="bold">
            {serviceName}
          </Typography>
          <Chip color="warning" size="lg">
            Differences Found
          </Chip>
        </Box>
        <Typography level="body-md" color="text.secondary">
          Viewing configuration differences between expected and actual values
        </Typography>
      </Box>

      {diffEntries.map(([key, value], index) => (
        <Card 
          key={key}
          variant="outlined"
          sx={{ mb: 2, p: 2 }}
        >
          <Typography level="title-lg" fontWeight="bold" sx={{ mb: 2 }}>
            {key}
          </Typography>

          <Grid container spacing={2}>
            {/* Expected Column */}
            <Grid xs={12} md={6}>
              <Card 
                variant="soft" 
                color="success"
                sx={{ 
                  bgcolor: 'success.50',
                  border: '2px solid',
                  borderColor: 'success.300',
                  height: '100%'
                }}
              >
                <Typography level="body-xs" color="success" fontWeight="bold" sx={{ mb: 1 }}>
                  ✓ EXPECTED VALUE
                </Typography>
                <Box 
                  component="pre" 
                  sx={{ 
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    color: 'success.700'
                  }}
                >
                  {typeof value === 'object' && value !== null && value.expected !== undefined
                    ? JSON.stringify(value.expected, null, 2)
                    : JSON.stringify(value, null, 2)}
                </Box>
              </Card>
            </Grid>

            {/* Actual Column */}
            <Grid xs={12} md={6}>
              <Card 
                variant="soft" 
                color="danger"
                sx={{ 
                  bgcolor: 'danger.50',
                  border: '2px solid',
                  borderColor: 'danger.300',
                  height: '100%'
                }}
              >
                <Typography level="body-xs" color="danger" fontWeight="bold" sx={{ mb: 1 }}>
                  ✗ ACTUAL VALUE
                </Typography>
                <Box 
                  component="pre" 
                  sx={{ 
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    color: 'danger.700'
                  }}
                >
                  {typeof value === 'object' && value !== null && value.actual !== undefined
                    ? JSON.stringify(value.actual, null, 2)
                    : JSON.stringify(value, null, 2)}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default DiffViewer;
