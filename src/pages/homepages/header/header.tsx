import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Drawer
} from 'antd';
import {
  MenuOutlined,
  HomeOutlined,
  DownloadOutlined,
  MessageOutlined,
  BookOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import UserLanguageSelector from '../../../components/UserLanguageSelector';
import logoBanner from '../../../assets/images/logo_header/logo_banner.png';

const { Header } = Layout;
const { Text } = Typography;

const HomePageHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Removed authentication features for homepage-only structure

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const menuItems = [
    {
      key: 'home',
      label: 'Trang chủ',
      icon: <HomeOutlined />,
      onClick: () => navigate('/')
    },
    {
      key: 'download',
      label: 'Download',
      icon: <DownloadOutlined />,
      onClick: () => navigate('/apk-download')
    },
    {
      key: 'guide',
      label: 'Hướng dẫn sử dụng',
      icon: <BookOutlined />,
      onClick: () => navigate('/guide')
    },
    {
      key: 'feedback',
      label: 'Feedback',
      icon: <MessageOutlined />,
      onClick: () => navigate('/feedback')
    }
  ];

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'transparent',
          padding: '20px 0',
          height: 'auto',
          lineHeight: 'normal'
        }}
      >
        {/* Main Header Container */}
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Floating Header Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '12px 20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px'
          }}>
            {/* Left Side - Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div 
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={handleLogoClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={logoBanner} 
                  alt="Mekong Pathfinder" 
                  style={{ 
                    height: '36px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Center - Navigation Menu */}
            <div style={{ 
              display: window.innerWidth > 768 ? 'flex' : 'none', 
              gap: '8px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              {menuItems.map((item, index) => (
                <Button
                  key={item.key}
                  type="text"
                  icon={item.icon}
                  onClick={item.onClick}
                  style={{
                    borderRadius: '20px',
                    height: '36px',
                    padding: '0 16px',
                    fontWeight: '500',
                    fontSize: '14px',
                    color: location.pathname === item.key || 
                           (item.key === 'home' && location.pathname === '/') 
                           ? '#1890ff' : '#666',
                    background: location.pathname === item.key || 
                               (item.key === 'home' && location.pathname === '/') 
                               ? 'rgba(24, 144, 255, 0.1)' : 'transparent',
                    transition: 'all 0.3s ease',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.key && !(item.key === 'home' && location.pathname === '/')) {
                      e.currentTarget.style.background = 'rgba(24, 144, 255, 0.05)';
                      e.currentTarget.style.color = '#1890ff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.key && !(item.key === 'home' && location.pathname === '/')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#666';
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Right Side - Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Language Selector */}
              <UserLanguageSelector />

              {/* Contact Button */}
              <Button
                type="primary"
                icon={<PhoneOutlined />}
                onClick={() => navigate('/feedback')}
                style={{
                  borderRadius: '20px',
                  height: '36px',
                  padding: '0 16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Liên hệ
              </Button>

              {/* Mobile Menu Button */}
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuVisible(true)}
                style={{
                  borderRadius: '50%',
                  height: '36px',
                  width: '36px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  display: window.innerWidth <= 768 ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = 'rgba(24, 144, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                }}
              />
            </div>
          </div>
        </div>
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        styles={{
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff'
          }
        }}
      >
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          {menuItems.map(item => (
            <Button
              key={item.key}
              type="text"
              icon={item.icon}
              onClick={() => {
                item.onClick();
                setMobileMenuVisible(false);
              }}
              style={{
                width: '100%',
                height: '50px',
                textAlign: 'left',
                justifyContent: 'flex-start',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '12px'
              }}
            >
              {item.label}
            </Button>
          ))}
          
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
            <Text type="secondary" style={{ fontSize: '14px' }}>
              Liên hệ hỗ trợ
            </Text>
            <Space direction="vertical" size={8} style={{ width: '100%', marginTop: '12px' }}>
              <Space>
                <PhoneOutlined style={{ color: '#1890ff' }} />
                <Text>1900-xxxx</Text>
              </Space>
              <Space>
                <MailOutlined style={{ color: '#1890ff' }} />
                <Text>support@mekongpathfinder.com</Text>
              </Space>
            </Space>
          </div>
        </Space>
      </Drawer>

      {/* Spacer for fixed header */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default HomePageHeader;