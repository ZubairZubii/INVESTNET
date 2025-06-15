import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  Collapse,
  IconButton,
} from '@mui/material';
import { Search, ChevronDown, ChevronUp, MessageSquare, FileText, PhoneCall } from 'lucide-react';

const HelpCenter = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqs = [
    {
      question: "How do I verify a business?",
      answer: "To verify a business, navigate to the Business Verification tab and follow these steps: 1) Upload required documents 2) Fill in business details 3) Submit for review. Our team typically processes verifications within 24-48 hours."
    },
    {
      question: "How do I manage user permissions?",
      answer: "User permissions can be managed from the User Management section. Select a user, click on 'Edit Permissions', and adjust their role and access levels as needed. Don't forget to save your changes."
    },
    {
      question: "What do I do about flagged content?",
      answer: "When content is flagged, review it in the Flagged Content section. You can either approve the content if it meets our guidelines or remove it if it violates our policies. Always document your decision."
    }
  ];

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Title */}
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
        Help Center
      </Typography>

      {/* Search Section */}
      <Box sx={{ mb: 6 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search for help..."
          InputProps={{
            startAdornment: (
              <Search style={{ marginLeft: 8, marginRight: 8, color: '#666' }} />
            ),
          }}
          sx={{
            backgroundColor: '#f0f2f5',
            borderRadius: '25px',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiInputBase-input': { padding: '10px 14px' },
          }}
        />
      </Box>

      {/* Quick Actions */}
      <Grid container spacing={4} sx={{ mb: 6 }} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: '12px', '&:hover': { boxShadow: 6 } }}>
            <MessageSquare sx={{ fontSize: 40, color: '#42a5f5', mb: 1 }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: '#333' }}>
              Chat Support
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Get help from our team
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: '12px', '&:hover': { boxShadow: 6 } }}>
            <FileText sx={{ fontSize: 40, color: '#66bb6a', mb: 1 }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: '#333' }}>
              Documentation
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Browse our guides
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={3} sx={{ textAlign: 'center', p: 3, borderRadius: '12px', '&:hover': { boxShadow: 6 } }}>
            <PhoneCall sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: '#333' }}>
              Phone Support
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Call our support team
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* FAQs Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Card
            key={index}
            elevation={2}
            sx={{
              mb: 2,
              borderRadius: '8px',
              '&:hover': { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setOpenSection(openSection === index ? null : index)}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#555' }}>{faq.question}</Typography>
                <IconButton>
                  {openSection === index ? (
                    <ChevronUp sx={{ fontSize: 24, color: '#666' }} />
                  ) : (
                    <ChevronDown sx={{ fontSize: 24, color: '#666' }} />
                  )}
                </IconButton>
              </Box>
              <Collapse in={openSection === index} timeout="auto" unmountOnExit>
                <Box sx={{ mt: 2, borderLeft: '3px solid #eee', pl: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    {faq.answer}
                  </Typography>
                </Box>
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Contact Information */}
      <Card elevation={3} sx={{ p: 4, borderRadius: '12px', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
          Still Need Help?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          Our support team is available 24/7 to help you with any questions or issues.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
            <MessageSquare sx={{ fontSize: 20, verticalAlign: 'middle', mr: 1 }} />
            support@investnet.com
          </Typography>
          <Typography variant="body1" sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
            <PhoneCall sx={{ fontSize: 20, verticalAlign: 'middle', mr: 1 }} />
            +1 (555) 123-4567
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default HelpCenter;
