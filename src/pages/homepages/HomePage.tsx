import React from 'react';
import { 
  Card, 
  Button, 
  Typography, 
  Space, 
  Row, 
  Col, 
  Steps, 
  List,
  Tag,
  Divider,
  Carousel,
  Statistic,
  Timeline,
  Alert,
  Rate,
  Avatar
} from 'antd';
import logoBanner from '../../assets/images/logo_header/logo_banner.png';
import banner from '../../assets/images/logo_header/banner.png';
import { 
  DownloadOutlined, 
  MessageOutlined, 
  MobileOutlined, 
  SafetyOutlined, 
  CheckCircleOutlined,
  InfoCircleOutlined,
  StarOutlined,
  HeartOutlined,
  BulbOutlined,
  BugOutlined,
  UserOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  RocketOutlined,
  TrophyOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HomePageHeader from './header/header';
import HomePageFooter from './footer/footer';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <EnvironmentOutlined style={{ color: '#52c41a', fontSize: '32px' }} />,
      title: 'Bản đồ thông minh',
      description: 'Tích hợp bản đồ chi tiết với thông tin giao thông thời gian thực'
    },
    {
      icon: <ClockCircleOutlined style={{ color: '#1890ff', fontSize: '32px' }} />,
      title: 'Thời tiết chính xác',
      description: 'Dự báo thời tiết chính xác cho khu vực Đồng bằng sông Cửu Long'
    },
    {
      icon: <SafetyOutlined style={{ color: '#faad14', fontSize: '32px' }} />,
      title: 'An toàn tuyệt đối',
      description: 'Cảnh báo sớm về lũ lụt và các hiện tượng thời tiết nguy hiểm'
    },
    {
      icon: <TeamOutlined style={{ color: '#722ed1', fontSize: '32px' }} />,
      title: 'Cộng đồng',
      description: 'Kết nối với cộng đồng người dùng và chia sẻ thông tin hữu ích'
    }
  ];

  const steps = [
    {
      title: 'Tải ứng dụng',
      description: 'Tải APK từ website hoặc Google Play Store',
      icon: <DownloadOutlined />
    },
    {
      title: 'Đăng ký tài khoản',
      description: 'Tạo tài khoản để sử dụng đầy đủ tính năng',
      icon: <UserOutlined />
    },
    {
      title: 'Khám phá tính năng',
      description: 'Sử dụng các tính năng bản đồ, thời tiết và cộng đồng',
      icon: <RocketOutlined />
    },
    {
      title: 'Chia sẻ trải nghiệm',
      description: 'Góp ý và chia sẻ với cộng đồng người dùng',
      icon: <MessageOutlined />
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'Nông dân',
      content: 'Ứng dụng giúp tôi theo dõi thời tiết và lũ lụt rất hiệu quả. Cảm ơn team phát triển!',
      rating: 5,
      avatar: null
    },
    {
      name: 'Trần Thị B',
      role: 'Sinh viên',
      content: 'Giao diện đẹp, dễ sử dụng. Tính năng bản đồ rất chính xác và hữu ích.',
      rating: 5,
      avatar: null
    },
    {
      name: 'Lê Văn C',
      role: 'Tài xế',
      content: 'Thông tin giao thông thời gian thực giúp tôi tránh được nhiều đoạn đường tắc.',
      rating: 4,
      avatar: null
    }
  ];

  const achievements = [
    {
      icon: <TrophyOutlined style={{ color: '#faad14' }} />,
      title: 'Giải thưởng',
      description: 'Ứng dụng tốt nhất 2024'
    },
    {
      icon: <StarOutlined style={{ color: '#52c41a' }} />,
      title: 'Đánh giá',
      description: '4.8/5 sao từ người dùng'
    },
    {
      icon: <GlobalOutlined style={{ color: '#1890ff' }} />,
      title: 'Người dùng',
      description: 'Hơn 10,000 người tin dùng'
    },
    {
      icon: <HeartOutlined style={{ color: '#ff4d4f' }} />,
      title: 'Hỗ trợ',
      description: '24/7 hỗ trợ người dùng'
    }
  ];

  const carouselItems = [
    {
      title: 'Khám phá Mekong Pathfinder',
      description: 'Ứng dụng di động thông minh cho khu vực Đồng bằng sông Cửu Long',
      image: logoBanner,
      buttonText: 'Tìm hiểu thêm',
      buttonAction: () => navigate('/apk-download')
    },
    {
      title: 'Theo dõi thời tiết chính xác',
      description: 'Dự báo thời tiết và cảnh báo lũ lụt thời gian thực',
      image: banner,
      buttonText: 'Xem demo',
      buttonAction: () => navigate('/feedback')
    },
    {
      title: 'Cộng đồng người dùng',
      description: 'Kết nối và chia sẻ thông tin với cộng đồng',
      image: logoBanner,
      buttonText: 'Tham gia',
      buttonAction: () => navigate('/feedback')
    }
  ];

  return (
    <>
      <HomePageHeader />
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Space direction="vertical" size={32} style={{ width: '100%' }}>
        {/* Hero Section */}
        <Card>
          <Carousel autoplay autoplaySpeed={5000} lazyLoad="ondemand">
            {carouselItems.map((item, index) => (
              <div key={index}>
                <Row gutter={[24, 24]} align="middle" style={{ minHeight: '400px' }}>
                  <Col xs={24} md={12}>
                    <Space direction="vertical" size={24}>
                      <Title level={1} style={{ margin: 0 }}>
                        {item.title}
                      </Title>
                      <Paragraph style={{ fontSize: '18px', lineHeight: 1.6 }}>
                        {item.description}
                      </Paragraph>
                      <Space wrap>
                        <Button 
                          type="primary" 
                          size="large" 
                          icon={<ArrowRightOutlined />}
                          onClick={item.buttonAction}
                        >
                          {item.buttonText}
                        </Button>
                        <Button 
                          size="large" 
                          icon={<PlayCircleOutlined />}
                        >
                          Xem video
                        </Button>
                      </Space>
                    </Space>
                  </Col>
                  <Col xs={24} md={12}>
                    <div style={{ 
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '400px',
                      padding: '20px'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '100%', 
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </Card>

        {/* Quick Actions */}
        <Card title="Hành động nhanh">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card 
                hoverable 
                style={{ textAlign: 'center', height: '100%' }}
                onClick={() => navigate('/apk-download')}
              >
                <Space direction="vertical" size={16}>
                  <DownloadOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                  <Title level={4} style={{ margin: 0 }}>Tải ứng dụng</Title>
                  <Text type="secondary">Tải APK và cài đặt ứng dụng</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card 
                hoverable 
                style={{ textAlign: 'center', height: '100%' }}
                onClick={() => navigate('/feedback')}
              >
                <Space direction="vertical" size={16}>
                  <MessageOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                  <Title level={4} style={{ margin: 0 }}>Góp ý</Title>
                  <Text type="secondary">Chia sẻ ý kiến và phản hồi</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card 
                hoverable 
                style={{ textAlign: 'center', height: '100%' }}
                onClick={() => navigate('/guide')}
              >
                <Space direction="vertical" size={16}>
                  <InfoCircleOutlined style={{ fontSize: '48px', color: '#faad14' }} />
                  <Title level={4} style={{ margin: 0 }}>Hướng dẫn</Title>
                  <Text type="secondary">Tìm hiểu cách sử dụng</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Features Section */}
        <Card title="Tính năng nổi bật">
          <Row gutter={[16, 16]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card size="small" hoverable style={{ height: '100%' }}>
                  <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                    <div>{feature.icon}</div>
                    <Title level={5} style={{ margin: 0 }}>{feature.title}</Title>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {feature.description}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* How to Use */}
        <Card title="Hướng dẫn sử dụng">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Steps
                direction="vertical"
                current={-1}
                items={steps.map(step => ({
                  title: step.title,
                  description: step.description,
                  icon: step.icon
                }))}
              />
            </Col>
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Title level={4}>Bắt đầu ngay hôm nay</Title>
                <Paragraph>
                  Chỉ với vài bước đơn giản, bạn có thể bắt đầu sử dụng ứng dụng 
                  Mekong Pathfinder và khám phá các tính năng tuyệt vời.
                </Paragraph>
                <Alert
                  message="Lưu ý quan trọng"
                  description="Ứng dụng yêu cầu Android 6.0 trở lên và kết nối Internet để hoạt động tốt nhất."
                  type="info"
                  showIcon
                />
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<DownloadOutlined />}
                  onClick={() => navigate('/apk-download')}
                  style={{ width: '100%' }}
                >
                  Tải ứng dụng ngay
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Achievements */}
        <Card title="Thành tựu">
          <Row gutter={[16, 16]}>
            {achievements.map((achievement, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card size="small" style={{ textAlign: 'center' }}>
                  <Space direction="vertical" size={8}>
                    <div style={{ fontSize: '32px' }}>{achievement.icon}</div>
                    <Title level={5} style={{ margin: 0 }}>{achievement.title}</Title>
                    <Text type="secondary">{achievement.description}</Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Testimonials */}
        <Card title="Người dùng nói gì">
          <Row gutter={[16, 16]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index}>
                <Card size="small">
                  <Space direction="vertical" size={12} style={{ width: '100%' }}>
                    <Space>
                      <Avatar 
                        size={40}
                        style={{ 
                          backgroundColor: '#1890ff',
                          color: '#fff'
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Space direction="vertical" size={0}>
                        <Text strong>{testimonial.name}</Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {testimonial.role}
                        </Text>
                      </Space>
                    </Space>
                    <Rate disabled value={testimonial.rating} style={{ fontSize: '14px' }} />
                    <Paragraph style={{ margin: 0, fontSize: '14px' }}>
                      "{testimonial.content}"
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Contact & Support */}
        <Card title="Liên hệ & Hỗ trợ">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Title level={4}>Thông tin liên hệ</Title>
                <List
                  dataSource={[
                    { icon: <MailOutlined />, text: 'Email: support@mekongpathfinder.com' },
                    { icon: <PhoneOutlined />, text: 'Hotline: 1900-xxxx' },
                    { icon: <ClockCircleOutlined />, text: 'Thời gian: 8:00 - 17:00 (T2-T6)' }
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Space>
                        <div style={{ color: '#1890ff' }}>{item.icon}</div>
                        <Text>{item.text}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Title level={4}>Hỗ trợ nhanh</Title>
                <Space wrap>
                  <Button 
                    type="primary" 
                    icon={<MessageOutlined />}
                    onClick={() => navigate('/feedback')}
                  >
                    Gửi góp ý
                  </Button>
                  <Button 
                    icon={<DownloadOutlined />}
                    onClick={() => navigate('/apk-download')}
                  >
                    Tải ứng dụng
                  </Button>
                </Space>
                <Alert
                  message="Cần hỗ trợ?"
                  description="Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua email hoặc gửi góp ý trực tiếp."
                  type="success"
                  showIcon
                />
              </Space>
            </Col>
          </Row>
        </Card>
        </Space>
      </div>
      
      
      <HomePageFooter />
    </>
  );
};

export default HomePage;
