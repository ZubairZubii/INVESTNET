import React, { useState } from 'react';
// import './AdminDashboard.css'; // We can create this file if more complex styling is needed
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  TextField,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popper,
  Paper,
  ClickAwayListener,
  InputAdornment, // Import InputAdornment
} from '@mui/material';
import { Bell, Search, Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import UserManagement from './UserManagement';
import BusinessVerification from './BusinessVerification';
import FlaggedContentPage from './FlaggedContentPage';
import AnalyticsPage from './AnalyticsPage';
import SettingsPage from './SettingsPage';
import HelpCircle from './HelpCenter';
import NotificationsPage from './NotificationsPage';
import logo from './investnet.png';
import InvestorBusinessPosts from './InvestorBusinessPosts';


const AdminDashboard = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('users'); // Default active tab
  const [showNotifications, setShowNotifications] = useState(false); // Notifications toggle
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowNotifications(false); // Close notifications when switching tabs
  };

  const sidebarItems = [
    { name: 'User Management', tab: 'users' },
    { name: 'Business Verification', tab: 'verification' },
    { name: 'Flagged Content', tab: 'flagged' },
    { name: 'Analytics', tab: 'analytics' },
    { name: 'Settings', tab: 'settings' },
    { name: 'Help Center', tab: 'help' },
    { name: 'Investor & Business Posts', tab: 'posts' }

  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const results = sidebarItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
      setSearchAnchorEl(event.currentTarget);
    } else {
      setSearchResults([]);
      setSearchAnchorEl(null);
    }
  };

  const handleSearchResultClick = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
    setSearchResults([]);
    setSearchAnchorEl(null);
  };

  const handleCloseSearchResults = () => {
    setSearchResults([]);
    setSearchAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}> {/* Added background color for the main content area */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '70px', // Slightly reduced AppBar height for a sleeker look
          backgroundColor: '#ffffff', // White background
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow
        }}
      >
        <Toolbar
          sx={{
            minHeight: '70px', // Match the AppBar height
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Center items vertically
            px: 3, // Horizontal padding
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: '#333' }} // Show only on mobile, dark icon
          >
            <Menu />
          </IconButton>
          <img src={logo} alt="InvestNet Logo" style={{ height: '40px', marginRight: '20px' }} /> {/* Adjusted logo size */}
          <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: '#333', fontWeight: '600' }}>
            Admin Dashboard
          </Typography>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}> {/* Ensure search and bell are aligned */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              sx={{
                backgroundColor: '#f0f2f5', // Light grey background for search
                borderRadius: '25px', // Rounded corners for search input
                border: '1px solid #e0e0e0', // Subtle border
                mr: 2,
                width: '250px', // Fixed width for search input
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Remove default outline
                '& .MuiInputBase-input': { padding: '10px 14px' }, // Adjust padding
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search style={{ color: '#666', fontSize: '20px' }} /> {/* Darker search icon */}
                  </InputAdornment>
                ),
              }}
            />
            {searchResults.length > 0 && (
              <Popper
                open
                anchorEl={searchAnchorEl}
                placement="bottom-start"
                style={{ zIndex: 1300, width: '250px' }}
              >
                <ClickAwayListener onClickAway={handleCloseSearchResults}>
                  <Paper elevation={3} sx={{ borderRadius: '8px' }}> {/* Added shadow and rounded corners */}
                    <List>
                      {searchResults.map((result) => (
                        <ListItem key={result.tab} disablePadding>
                          <ListItemButton onClick={() => handleSearchResultClick(result.tab)}>
                            <ListItemText primary={result.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </ClickAwayListener>
              </Popper>
            )}
            <IconButton color="inherit" onClick={handleNotificationClick} sx={{ color: '#666' }}> {/* Darker bell icon */}
              <Badge badgeContent={4} color="error"> {/* Use error color for notifications */}
                <Bell />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        activeTab={activeTab}
        setActiveTab={handleTabClick} // Update active tab and hide notifications
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `240px` }, // Sidebar width
          width: { sm: `calc(100% - 240px)` },
          mt: '70px', // Adjust top margin to account for AppBar height
        }}
      >
        {/* <Toolbar /> This is no longer strictly needed with adjusted mt */}
        {showNotifications ? (
          <NotificationsPage setActiveTab={handleTabClick} /> // Pass the tab updater
        ) : (
          <>
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'verification' && <BusinessVerification />}
            {activeTab === 'flagged' && <FlaggedContentPage />}
            {activeTab === 'analytics' && <AnalyticsPage />}
            {activeTab === 'settings' && <SettingsPage />}
            {activeTab === 'help' && <HelpCircle />}
            {activeTab === 'posts' && <InvestorBusinessPosts />}

          </>
        )}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
