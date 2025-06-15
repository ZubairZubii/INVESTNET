import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Switch,
} from '@mui/material';
import { Save, User, Lock, Bell } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
        Settings
      </Typography>

      {/* Profile Settings */}
      <Card elevation={3} sx={{ mb: 3, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 'bold', color: '#555' }}>
            <User style={{ marginRight: 8 }} size={20} />
            Profile Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                placeholder="John Doe"
                sx={{ borderRadius: '8px', '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                placeholder="john@example.com"
                sx={{ borderRadius: '8px', '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card elevation={3} sx={{ mb: 3, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 'bold', color: '#555' }}>
            <Lock style={{ marginRight: 8 }} size={20} />
            Security
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Two-Factor Authentication</Typography>
              <Typography variant="body2" color="textSecondary">
                Add an extra layer of security
              </Typography>
            </Box>
            <Switch
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
          </Box>
          <Button variant="text" color="primary" sx={{ textTransform: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card elevation={3} sx={{ mb: 3, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 'bold', color: '#555' }}>
            <Bell style={{ marginRight: 8 }} size={20} />
            Notifications
          </Typography>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Push Notifications</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive notifications about important updates
              </Typography>
            </Box>
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Marketing Emails</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive emails about new features and updates
              </Typography>
            </Box>
            <Switch
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Save size={20} />}
          sx={{ px: 4, py: 1.5, borderRadius: '8px', backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45a049' } }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
