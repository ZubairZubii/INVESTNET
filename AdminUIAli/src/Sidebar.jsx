import React from 'react';
import { 
  Users, 
  FileCheck, 
  Flag, 
  BarChart2, 
  Settings,
  HelpCircle,
  LogOut 
} from 'lucide-react';
import PostAdd from '@mui/icons-material/PostAdd';
import logo from './investnet.png'; // Import the logo
// import './Sidebar.css';


import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Box,
  Toolbar, // Import Toolbar for spacing
} from '@mui/material';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: <Users />, label: 'User Management', id: 'users' },
    { icon: <FileCheck />, label: 'Business Verification', id: 'verification' },
    { icon: <Flag />, label: 'Flagged Content', id: 'flagged' },
    { icon: <BarChart2 />, label: 'Analytics', id: 'analytics' },
    { icon: <Settings />, label: 'Settings', id: 'settings' },
    { icon: <HelpCircle />, label: 'Help Center', id: 'help' },
    { icon: <PostAdd />, label: 'Investors and Businesses posts', id: 'posts' },
  ];

  const drawerWidth = 240;

  // Drawer content (shared by both mobile and desktop views)
  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ffffff' }}> {/* Added background color for the sidebar */}
      {/* Sidebar Header with Logo */}
      <Toolbar sx={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <img src={logo} alt="InvestNet Logo" style={{ height: '40px' }} />
      </Toolbar>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, pt: 0 }}> {/* flexGrow to push footer to bottom */}
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false); // Close the drawer after clicking
              }}
              sx={{
                py: 1.5, // Vertical padding
                px: 3, // Horizontal padding
                backgroundColor: activeTab === item.id ? '#e0e0e0' : 'transparent', // Grey for selected
                color: activeTab === item.id ? '#333' : '#666', // Darker text for selected
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Lighter grey on hover
                  color: '#333',
                },
                '& .MuiListItemIcon-root': {
                  color: activeTab === item.id ? '#333' : '#666', // Darker icon for selected
                  minWidth: '40px', // Adjust icon spacing
                },
                borderRadius: '8px', // Rounded corners for list items
                mx: 2, // Horizontal margin to create space from edge
                my: 0.5, // Vertical margin between items
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': { fontWeight: activeTab === item.id ? '600' : 'normal' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: '1px solid #eee' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ py: 1.5, px: 3, borderRadius: '8px', mx: 2, '&:hover': { backgroundColor: '#f0f0f0', color: '#333' }, '& .MuiListItemIcon-root': { minWidth: '40px' } }}>
              <ListItemIcon>
                <LogOut />
              </ListItemIcon>
              <ListItemText primary="Sign Out" sx={{ '& .MuiTypography-root': { fontWeight: 'normal' } }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show only on mobile
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Persistent Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' }, // Show only on larger screens
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none', boxShadow: '2px 0 5px rgba(0,0,0,0.05)' },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
