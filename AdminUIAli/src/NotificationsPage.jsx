import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Paper, Chip } from '@mui/material';
import { Check, Trash2, Info, AlertTriangle } from 'lucide-react';

const NotificationsPage = ({ setActiveTab }) => {
  const notifications = [
    {
      id: 1,
      title: 'New User Registration',
      message: 'User JohnDoe has registered.',
      date: '2024-12-06',
      type: 'info',
      actionTab: 'users',
    },
    {
      id: 2,
      title: 'Flagged Content',
      message: 'Post "Spam Ad" flagged for review.',
      date: '2024-12-05',
      type: 'warning',
      actionTab: 'flagged',
    },
    {
      id: 3,
      title: 'Business Verification',
      message: 'Business "XYZ Corp" requires verification.',
      date: '2024-12-04',
      type: 'info',
      actionTab: 'verification',
    },
    {
      id: 4,
      title: 'Resolved Issue',
      message: 'Issue #345 has been resolved.',
      date: '2024-12-03',
      type: 'success',
      actionTab: 'analytics',
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return <Info fontSize="small" />;
      case 'warning':
        return <AlertTriangle fontSize="small" />;
      case 'success':
        return <Check fontSize="small" />;
      default:
        return <Info fontSize="small" />;
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'info':
        return '#e3f2fd'; // Light blue
      case 'warning':
        return '#fff3e0'; // Light orange
      case 'success':
        return '#e8f5e9'; // Light green
      default:
        return '#ffffff';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
        Notifications
      </Typography>

      <List>
        {notifications.map((notification) => (
          <Paper
            key={notification.id}
            elevation={2}
            sx={{
              mb: 2,
              borderRadius: '12px',
              backgroundColor: getBackgroundColor(notification.type),
              cursor: 'pointer',
              '&:hover': { boxShadow: 4 },
            }}
            onClick={() => setActiveTab(notification.actionTab)} // Navigate to the relevant tab
          >
            <ListItem
              sx={{
                py: 2,
                px: 3,
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: notification.type === 'warning' ? '#ff9800' : notification.type === 'success' ? '#66bb6a' : '#42a5f5', color: '#fff' }}>
                  {getNotificationIcon(notification.type)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>{notification.title}</Typography>}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      {notification.message}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 0.5 }}>
                      {notification.date}
                    </Typography>
                  </>
                }
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="primary" size="small" sx={{ '&:hover': { backgroundColor: '#c5e1fd' } }}>
                  <Check fontSize="small" />
                </IconButton>
                <IconButton color="error" size="small" sx={{ '&:hover': { backgroundColor: '#ffebee' } }}>
                  <Trash2 fontSize="small" />
                </IconButton>
              </Box>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default NotificationsPage;
