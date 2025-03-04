import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        梦幻西游工具箱
      </Typography>
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        任务追踪
      </Button>
      <Button variant="contained" color="secondary" fullWidth style={{ marginBottom: '10px' }}>
        资产管理
      </Button>
      <Button variant="outlined" fullWidth>
        宠物评估
      </Button>
    </Container>
  );
}

export default App;
