// src/App.jsx
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline
} from '@mui/material';
import {
  AccountBalance as AssetManagerIcon,
  Task as TaskTrackerIcon,
  Pets as PetEvaluatorIcon
} from '@mui/icons-material';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 菜单项数据
  const menuItems = [
    { text: '资产管理', icon: <AssetManagerIcon />, content: '欢迎来到资产管理页面' },
    { text: '任务追踪', icon: <TaskTrackerIcon />, content: '欢迎来到任务追踪页面' },
    { text: '宠物评估', icon: <PetEvaluatorIcon />, content: '欢迎来到宠物评估页面' }
  ];

  // 处理菜单项点击事件
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* 侧边菜单栏 */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box'
          }
        }}
      >
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            梦幻工具箱
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 主内容区域 */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {menuItems[selectedIndex].text}
        </Typography>
        <Typography variant="body1">
          {menuItems[selectedIndex].content}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
