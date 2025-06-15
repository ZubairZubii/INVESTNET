import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  TextField,
  InputAdornment,
  TablePagination,
} from '@mui/material';
import { Search } from 'lucide-react';

const FlaggedContentPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterText, setFilterText] = useState('');

  // Example flagged content data
  const flaggedContent = [
    {
      id: 1,
      contentTitle: 'Offensive Post',
      flaggedBy: 'User123',
      reason: 'Hate speech',
      status: 'Pending',
      flaggedDate: '2024-12-05',
    },
    {
      id: 2,
      contentTitle: 'Inappropriate Image',
      flaggedBy: 'User456',
      reason: 'Explicit content',
      status: 'Reviewed',
      flaggedDate: '2024-12-04',
    },
    {
      id: 3,
      contentTitle: 'Spam Message',
      flaggedBy: 'User789',
      reason: 'Spam',
      status: 'Pending',
      flaggedDate: '2024-12-03',
    },
    {
      id: 4,
      contentTitle: 'Fake Profile',
      flaggedBy: 'User101',
      reason: 'Impersonation',
      status: 'Resolved',
      flaggedDate: '2024-12-02',
    },
    {
      id: 5,
      contentTitle: 'Copyright Infringement',
      flaggedBy: 'LegalTeam',
      reason: 'Unauthorized Use',
      status: 'Pending',
      flaggedDate: '2024-12-01',
    },
    {
      id: 6,
      contentTitle: 'Inaccurate Business Info',
      flaggedBy: 'BusinessAudit',
      reason: 'Misleading Data',
      status: 'Reviewed',
      flaggedDate: '2024-11-30',
    },
    {
      id: 7,
      contentTitle: 'Harassing Comment',
      flaggedBy: 'ModeratorAI',
      reason: 'Harassment',
      status: 'Resolved',
      flaggedDate: '2024-11-29',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Reviewed':
        return 'info';
      case 'Resolved':
        return 'success';
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

  const filteredContent = flaggedContent.filter(
    (content) =>
      content.contentTitle.toLowerCase().includes(filterText.toLowerCase()) ||
      content.flaggedBy.toLowerCase().includes(filterText.toLowerCase()) ||
      content.reason.toLowerCase().includes(filterText.toLowerCase())
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredContent.length) : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
          Flagged Content
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search content..."
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
            width: '250px',
          }}
        />
      </Box>

      {/* Table for Flagged Content */}
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        <Table sx={{ minWidth: 650 }} aria-label="flagged content table">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Content Title</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Flagged By</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Reason</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Date Flagged</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#555', py: 1.5 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredContent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredContent
            ).map((row) => (
              <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0e0e0' } }}>
                <TableCell sx={{ py: 1.5 }}>{row.contentTitle}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.flaggedBy}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.reason}</TableCell>
                <TableCell sx={{ py: 1.5 }}>
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    size="small"
                    sx={{ borderRadius: '4px', fontWeight: 'bold' }}
                  />
                </TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.flaggedDate}</TableCell>
                <TableCell align="center" sx={{ py: 1.5 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ mr: 1, borderRadius: '6px', textTransform: 'none', borderColor: '#ddd', color: '#555', '&:hover': { borderColor: '#ccc', backgroundColor: '#f0f0f0' } }}
                    onClick={() => alert(`Reviewing content: ${row.contentTitle}`)}
                  >
                    Review
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    sx={{ borderRadius: '6px', textTransform: 'none' }}
                    onClick={() => alert(`Resolved content: ${row.contentTitle}`)}
                  >
                    Resolve
                  </Button>
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
        count={filteredContent.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default FlaggedContentPage;
