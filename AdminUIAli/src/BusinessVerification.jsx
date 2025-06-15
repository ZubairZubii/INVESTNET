import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Select, MenuItem, Paper, Chip, TextField, InputAdornment, TablePagination, Avatar } from '@mui/material';
import { Check, X, Clock, AlertCircle, Search } from 'lucide-react';

const BusinessVerification = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterText, setFilterText] = useState('');

  const verificationRequests = [
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      registrationDate: "2024-03-15",
      documentType: "Business License",
      status: "Approved",
      submittedBy: "james@techsolutions.com",
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      id: 2,
      businessName: "Green Energy Co",
      registrationDate: "2024-03-18",
      documentType: "Tax Certificate",
      status: "Waiting",
      submittedBy: "contact@greenenergy.com",
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      id: 3,
      businessName: "Local Cafe Chain",
      registrationDate: "2024-03-17",
      documentType: "Health Permit",
      status: "Rejected",
      submittedBy: "admin@localcafe.com",
      avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: 4,
      businessName: "Global Traders Ltd",
      registrationDate: "2024-03-19",
      documentType: "Import License",
      status: "Waiting",
      submittedBy: "info@globaltraders.com",
      avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    {
      id: 5,
      businessName: "Innovative Solutions",
      registrationDate: "2024-03-20",
      documentType: "Patent Application",
      status: "Approved",
      submittedBy: "ceo@innovative.com",
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    {
      id: 6,
      businessName: "Fashion Forward",
      registrationDate: "2024-03-21",
      documentType: "Trade Mark",
      status: "Waiting",
      submittedBy: "designer@fashion.com",
      avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
    {
      id: 7,
      businessName: "Future Tech Inc.",
      registrationDate: "2024-03-22",
      documentType: "Startup Permit",
      status: "Rejected",
      submittedBy: "founder@futuretech.com",
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      id: 8,
      businessName: "Urban Eats Bistro",
      registrationDate: "2024-03-23",
      documentType: "Food License",
      status: "Approved",
      submittedBy: "chef@urbaneats.com",
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <Check style={{ color: 'green', fontSize: 18 }} />;
      case 'Rejected':
        return <X style={{ color: 'red', fontSize: 18 }} />;
      case 'Waiting':
        return <Clock style={{ color: 'orange', fontSize: 18 }} />;
      default:
        return <AlertCircle style={{ fontSize: 18 }} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Rejected':
        return 'error';
      case 'Waiting':
        return 'warning';
      default:
        return 'default';
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setPage(0);
  };

  const filteredRequests = verificationRequests.filter(
    (request) =>
      request.businessName.toLowerCase().includes(filterText.toLowerCase()) ||
      request.submittedBy.toLowerCase().includes(filterText.toLowerCase())
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRequests.length) : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
          Business Verification
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search requests..."
            value={filterText}
            onChange={handleFilterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" sx={{ color: '#666' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f0f2f5',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          />
          <Select
            defaultValue="all"
            size="small"
            sx={{
              width: 200,
              borderRadius: '8px',
              backgroundColor: '#f0f2f5',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
            <MenuItem value="waiting">Waiting</MenuItem>
          </Select>
        </Box>
      </Box>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        <Table sx={{ minWidth: 650 }} aria-label="business verification table">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Business Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Registration Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Document Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Submitted By</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredRequests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredRequests
            ).map((request) => (
              <TableRow key={request.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0e0e0' } }}>
                <TableCell sx={{ py: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={request.avatar} alt={request.businessName} sx={{ width: 30, height: 30 }} />
                    {request.businessName}
                  </Box>
                </TableCell>
                <TableCell sx={{ py: 1.5 }}>{request.registrationDate}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{request.documentType}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{request.submittedBy}</TableCell>
                <TableCell sx={{ py: 1.5 }}>
                  <Chip
                    label={request.status}
                    color={getStatusColor(request.status)}
                    icon={getStatusIcon(request.status)}
                    size="small"
                    sx={{ borderRadius: '4px', fontWeight: 'bold' }}
                  />
                </TableCell>
                <TableCell sx={{ py: 1.5 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" size="small" sx={{ borderRadius: '6px', textTransform: 'none', borderColor: '#ddd', color: '#555', '&:hover': { borderColor: '#ccc', backgroundColor: '#f0f0f0' } }}>View Details</Button>
                    {request.status === 'Waiting' && (
                      <>
                        <Button variant="contained" color="success" size="small" sx={{ borderRadius: '6px', textTransform: 'none' }}>Approve</Button>
                        <Button variant="contained" color="error" size="small" sx={{ borderRadius: '6px', textTransform: 'none' }}>Reject</Button>
                      </>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={filteredRequests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default BusinessVerification;
