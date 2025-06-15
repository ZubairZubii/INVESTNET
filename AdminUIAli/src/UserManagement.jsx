import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Typography,
  Box,
  Chip,
  Grid,
  Paper,
  Avatar,
  TextField,
  InputAdornment,
  TablePagination,
} from '@mui/material';
import { Search } from 'lucide-react';

const UserManagement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterText, setFilterText] = useState('');

  const users = [
    { id: 1, name: 'John Smith', role: 'Investor', status: 'Active', email: 'john@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Sarah Wilson', role: 'Business', status: 'Pending', email: 'sarah@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Michael Brown', role: 'Admin', status: 'Active', email: 'michael@example.com', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Emma Davis', role: 'Investor', status: 'Inactive', email: 'emma@example.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'David Lee', role: 'Business', status: 'Active', email: 'david@example.com', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Olivia Chen', role: 'Investor', status: 'Pending', email: 'olivia@example.com', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, name: 'James White', role: 'Admin', status: 'Active', email: 'james@example.com', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Sophia Miller', role: 'Investor', status: 'Inactive', email: 'sophia@example.com', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'Daniel Kim', role: 'Business', status: 'Active', email: 'daniel@example.com', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Isabella Garcia', role: 'Investor', status: 'Pending', email: 'isabella@example.com', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Inactive':
        return 'error';
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

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase()) ||
      user.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredUsers.length) : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
          User Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search users..."
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
          <Button variant="contained" sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45a049' }, borderRadius: '8px', px: 3, py: 1.2 }}>
            Add User
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Table sx={{ minWidth: 650 }} aria-label="user management table">
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredUsers
                ).map((user) => (
                  <TableRow key={user.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0e0e0' } }}>
                    <TableCell sx={{ py: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={user.avatar} alt={user.name} sx={{ width: 30, height: 30 }} />
                        {user.name}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>{user.role}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <Chip label={user.status} color={getStatusColor(user.status)} size="small" sx={{ borderRadius: '4px', fontWeight: 'bold' }} />
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>{user.email}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton color="primary" sx={{ '&:hover': { color: '#1976d2' } }}>
                          <Edit size={20} />
                        </IconButton>
                        <IconButton color="error" sx={{ '&:hover': { color: '#d32f2f' } }}>
                          <Trash2 size={20} />
                        </IconButton>
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
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            sx={{ mt: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserManagement;
