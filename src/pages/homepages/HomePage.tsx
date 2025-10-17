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
import { useLanguage } from '../../context/LanguageContext';
import HomePageHeader from './header/header';
import HomePageFooter from './footer/footer';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: <EnvironmentOutlined style={{ color: '#52c41a', fontSize: '32px' }} />,
      title: t('home.features.map.title'),
      description: t('home.features.map.desc')
    },
    {
      icon: <ClockCircleOutlined style={{ color: '#1890ff', fontSize: '32px' }} />,
      title: t('home.features.weather.title'),
      description: t('home.features.weather.desc')
    },
    {
      icon: <SafetyOutlined style={{ color: '#faad14', fontSize: '32px' }} />,
      title: t('home.features.safety.title'),
      description: t('home.features.safety.desc')
    },
    {
      icon: <TeamOutlined style={{ color: '#722ed1', fontSize: '32px' }} />,
      title: t('home.features.community.title'),
      description: t('home.features.community.desc')
    }
  ];

  const steps = [
    {
      title: t('home.howto.step1'),
      description: t('home.howto.step1.desc'),
      icon: <DownloadOutlined />
    },
    {
      title: t('home.howto.step2'),
      description: t('home.howto.step2.desc'),
      icon: <UserOutlined />
    },
    {
      title: t('home.howto.step3'),
      description: t('home.howto.step3.desc'),
      icon: <RocketOutlined />
    },
    {
      title: t('home.howto.step4'),
      description: t('home.howto.step4.desc'),
      icon: <MessageOutlined />
    }
  ];

  const testimonials = [
    {
      name: t('home.testimonials.user1.name'),
      role: t('home.testimonials.user1.role'),
      content: t('home.testimonials.user1.content'),
      rating: 5,
      avatar: null
    },
    {
      name: t('home.testimonials.user2.name'),
      role: t('home.testimonials.user2.role'),
      content: t('home.testimonials.user2.content'),
      rating: 5,
      avatar: null
    },
    {
      name: t('home.testimonials.user3.name'),
      role: t('home.testimonials.user3.role'),
      content: t('home.testimonials.user3.content'),
      rating: 4,
      avatar: null
    }
  ];

  const achievements = [
    {
      icon: <TrophyOutlined style={{ color: '#faad14' }} />,
      title: t('home.achievements.award.title'),
      description: t('home.achievements.award.desc')
    },
    {
      icon: <StarOutlined style={{ color: '#52c41a' }} />,
      title: t('home.achievements.rating.title'),
      description: t('home.achievements.rating.desc')
    },
    {
      icon: <GlobalOutlined style={{ color: '#1890ff' }} />,
      title: t('home.achievements.users.title'),
      description: t('home.achievements.users.desc')
    },
    {
      icon: <HeartOutlined style={{ color: '#ff4d4f' }} />,
      title: t('home.achievements.support.title'),
      description: t('home.achievements.support.desc')
    }
  ];

  const carouselItems = [
    {
      title: t('home.hero.title1'),
      description: t('home.hero.desc1'),
      image: logoBanner,
      buttonText: t('home.hero.button1'),
      buttonAction: () => navigate('/apk-download')
    },
    {
      title: t('home.hero.title2'),
      description: t('home.hero.desc2'),
      image: banner,
      buttonText: t('home.hero.button2'),
      buttonAction: () => navigate('/feedback')
    },
    {
      title: t('home.hero.title3'),
      description: t('home.hero.desc3'),
      image: logoBanner,
      buttonText: t('home.hero.button3'),
      buttonAction: () => navigate('/feedback')
    }
  ];

  return (
    <>
      <HomePageHeader />
      <div style={{ 
        padding: window.innerWidth > 768 ? '24px' : '16px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <Space direction="vertical" size={32} style={{ width: '100%' }}>
        {/* Hero Section */}
        <Card>
          <Carousel autoplay autoplaySpeed={5000} lazyLoad="ondemand">
            {carouselItems.map((item, index) => (
              <div key={index}>
                <Row gutter={[24, 24]} align="middle" style={{ 
                  minHeight: window.innerWidth > 768 ? '400px' : '300px' 
                }}>
                  <Col xs={24} md={12}>
                    <Space direction="vertical" size={24}>
                      <Title level={1} style={{ 
                        margin: 0,
                        fontSize: window.innerWidth > 768 ? '32px' : '24px'
                      }}>
                        {item.title}
                      </Title>
                      <Paragraph style={{ 
                        fontSize: window.innerWidth > 768 ? '18px' : '16px', 
                        lineHeight: 1.6 
                      }}>
                        {item.description}
                      </Paragraph>
                      <Space wrap>
                        <Button 
                          type="primary" 
                          size={window.innerWidth > 768 ? 'large' : 'middle'}
                          icon={<ArrowRightOutlined />}
                          onClick={item.buttonAction}
                        >
                          {item.buttonText}
                        </Button>
                        <Button 
                          size={window.innerWidth > 768 ? 'large' : 'middle'}
                          icon={<PlayCircleOutlined />}
                        >
                          {t('home.hero.video')}
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
                      height: window.innerWidth > 768 ? '400px' : '250px',
                      padding: window.innerWidth > 768 ? '20px' : '10px'
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
        <Card title={t('home.quick.title')}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card 
                hoverable 
                style={{ textAlign: 'center', height: '100%' }}
                onClick={() => navigate('/apk-download')}
              >
                <Space direction="vertical" size={16}>
                  <DownloadOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                  <Title level={4} style={{ margin: 0 }}>{t('home.quick.download')}</Title>
                  <Text type="secondary">{t('home.quick.download.desc')}</Text>
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
                  <Title level={4} style={{ margin: 0 }}>{t('home.quick.feedback')}</Title>
                  <Text type="secondary">{t('home.quick.feedback.desc')}</Text>
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
                  <Title level={4} style={{ margin: 0 }}>{t('home.quick.guide')}</Title>
                  <Text type="secondary">{t('home.quick.guide.desc')}</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Features Section */}
        <Card title={t('home.features.title')}>
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
        <Card title={t('home.howto.title')}>
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
                <Title level={4}>{t('home.howto.start.title')}</Title>
                <Paragraph>
                  {t('home.howto.start.desc')}
                </Paragraph>
                <Alert
                  message={t('home.howto.note.title')}
                  description={t('home.howto.note.desc')}
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
                  {t('home.howto.download')}
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Achievements */}
        <Card title={t('home.achievements.title')}>
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
        <Card title={t('home.testimonials.title')}>
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
        <Card title={t('home.contact.title')}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Title level={4}>{t('home.contact.info.title')}</Title>
                <List
                  dataSource={[
                    { icon: <MailOutlined />, text: t('home.contact.info.email') },
                    { icon: <PhoneOutlined />, text: t('home.contact.info.phone') },
                    { icon: <ClockCircleOutlined />, text: t('home.contact.info.time') }
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
                <Title level={4}>{t('home.contact.support.title')}</Title>
                <Space wrap>
                  <Button 
                    type="primary" 
                    icon={<MessageOutlined />}
                    onClick={() => navigate('/feedback')}
                  >
                    {t('home.contact.support.feedback')}
                  </Button>
                  <Button 
                    icon={<DownloadOutlined />}
                    onClick={() => navigate('/apk-download')}
                  >
                    {t('home.contact.support.download')}
                  </Button>
                </Space>
                <Alert
                  message={t('home.contact.help.title')}
                  description={t('home.contact.help.desc')}
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
