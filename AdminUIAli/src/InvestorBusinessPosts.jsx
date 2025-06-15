import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Grid,
  IconButton,
  Stack,
} from '@mui/material';
import { ThumbUp, Comment, Share } from '@mui/icons-material';

const posts = [
  {
    id: 1,
    author: 'Investor John',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Investment Opportunities in Renewable Energy',
    description:
      'Exploring profitable ventures in renewable energy and how businesses can leverage this growing market.',
    date: 'December 5, 2024',
    category: 'Investments',
    likes: 34,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    author: 'Business Alpha Co.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Scaling Startups: A Success Story',
    description:
      'Sharing insights on how we scaled our business from a small startup to a leading company in the tech industry.',
    date: 'December 6, 2024',
    category: 'Business Insights',
    likes: 48,
    comments: 20,
    shares: 10,
  },
  {
    id: 3,
    author: 'Investor Sarah',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    title: 'Top Sectors to Watch in 2025',
    description:
      'A deep dive into the most promising sectors for investment in the coming year.',
    date: 'December 7, 2024',
    category: 'Market Trends',
    likes: 25,
    comments: 8,
    shares: 2,
  },
];

const InvestorBusinessPosts = () => {
  const [postStats, setPostStats] = useState(posts);

  const handleLike = (id) => {
    setPostStats((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id) => {
    alert(`Opening comments for post ID ${id}`);
  };

  const handleShare = (id) => {
    alert(`Post ID ${id} shared!`);
    setPostStats((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
        Investor & Business Posts
      </Typography>

      <Grid container spacing={3}>
        {postStats.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Card elevation={3} sx={{ height: '100%', borderRadius: '12px' }}>
              <CardHeader
                avatar={<Avatar src={post.avatar} alt={post.author} sx={{ width: 50, height: 50 }} />}
                title={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>{post.author}</Typography>}
                subheader={<Typography variant="body2" color="textSecondary">{post.date}</Typography>}
                sx={{ pb: 1 }}
              />
              <CardContent sx={{ pt: 0, pb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1.5 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5 }}>
                  {post.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: '#777', fontStyle: 'italic' }}
                >
                  Category: {post.category}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, borderTop: '1px solid #eee' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleLike(post.id)}
                    sx={{ '&:hover': { backgroundColor: '#e3f2fd' } }}
                  >
                    <ThumbUp fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">{post.likes} Likes</Typography>

                  <IconButton
                    color="inherit"
                    onClick={() => handleComment(post.id)}
                    sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, color: '#666' }}
                  >
                    <Comment fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">{post.comments} Comments</Typography>

                  <IconButton
                    color="inherit"
                    onClick={() => handleShare(post.id)}
                    sx={{ '&:hover': { backgroundColor: '#e8f5e9' }, color: '#666' }}
                  >
                    <Share fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">{post.shares} Shares</Typography>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InvestorBusinessPosts;
