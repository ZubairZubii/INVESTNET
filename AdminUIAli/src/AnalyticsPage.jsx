import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
  // Example Data for Line Chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [50, 100, 150, 200, 250, 300],
        borderColor: '#42a5f5', // Material-UI blue
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#42a5f5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#42a5f5',
      },
      {
        label: 'New Signups',
        data: [30, 60, 90, 120, 180, 250],
        borderColor: '#66bb6a', // Material-UI green
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#66bb6a',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#66bb6a',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#555',
        },
      },
      title: {
        display: false, // Title already in Typography
      },
    },
    scales: {
      x: {
        ticks: { color: '#777' },
        grid: { color: '#eee' },
      },
      y: {
        ticks: { color: '#777' },
        grid: { color: '#eee' },
      },
    },
  };

  // Example Data for Table
  const tableData = [
    { id: 1, metric: 'Total Users', value: 2458 },
    { id: 2, metric: 'Active Businesses', value: 384 },
    { id: 3, metric: 'Pending Verifications', value: 15 },
    { id: 4, metric: 'Flagged Content', value: 8 },
    { id: 5, metric: 'New Signups (Monthly)', value: 250 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
        Analytics
      </Typography>

      {/* Grid for Metrics Overview */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3} sx={{ borderRadius: '12px' }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                2,458
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3} sx={{ borderRadius: '12px' }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Active Businesses
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#f50057' }}>
                384
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3} sx={{ borderRadius: '12px' }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Pending Verifications
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3} sx={{ borderRadius: '12px' }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Flagged Content
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
          User Growth and Signups
        </Typography>
        <Card elevation={3} sx={{ borderRadius: '12px' }}>
          <CardContent>
            <Line data={chartData} options={chartOptions} />
          </CardContent>
        </Card>
      </Box>

      {/* Data Table */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
          Key Metrics
        </Typography>
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Table sx={{ minWidth: 650 }} aria-label="key metrics table">
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Metric</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                  <TableCell sx={{ py: 1.5 }}>{row.metric}</TableCell>
                  <TableCell align="right" sx={{ py: 1.5 }}>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AnalyticsPage;
