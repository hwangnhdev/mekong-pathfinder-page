import React, { useState } from 'react';
import { 
  Card, 
  Button, 
  Form, 
  Input, 
  Typography, 
  Space, 
  Row, 
  Col, 
  Divider, 
  Steps, 
  Alert, 
  message,
  Modal,
  Tag,
  List,
  Avatar
} from 'antd';
import { 
  DownloadOutlined, 
  MobileOutlined, 
  SafetyOutlined, 
  CheckCircleOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MailOutlined,
  AndroidOutlined,
  ClockCircleOutlined,
  StarOutlined
} from '@ant-design/icons';
import HomePageHeader from './header/header';
import HomePageFooter from './footer/footer';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface DownloadFormData {
  name: string;
  email: string;
}

const APKDownload: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleDownload = async (values: DownloadFormData) => {
    setLoading(true);
    
    try {
      // Simulate API call to log user download
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.success('Thông tin đã được ghi nhận! Đang chuẩn bị tải xuống...');
      setDownloadModalVisible(true);
      setCurrentStep(1);
      
      // Simulate download preparation
      setTimeout(() => {
        setCurrentStep(2);
        // Trigger actual download
        const link = document.createElement('a');
        link.href = '/assets/apk/mekong-pathfinder.apk'; // Replace with actual APK path
        link.download = 'mekong-pathfinder.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          setCurrentStep(3);
          message.success('Tải xuống hoàn tất! Cảm ơn bạn đã sử dụng ứng dụng.');
        }, 2000);
      }, 2000);
      
    } catch (error) {
      message.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  const appFeatures = [
    {
      icon: <MobileOutlined style={{ color: '#1890ff' }} />,
      title: 'Giao diện thân thiện',
      description: 'Thiết kế đơn giản, dễ sử dụng cho mọi lứa tuổi'
    },
    {
      icon: <SafetyOutlined style={{ color: '#52c41a' }} />,
      title: 'Bảo mật cao',
      description: 'Dữ liệu được mã hóa và bảo vệ an toàn'
    },
    {
      icon: <ClockCircleOutlined style={{ color: '#faad14' }} />,
      title: 'Cập nhật thời gian thực',
      description: 'Thông tin giao thông và thời tiết được cập nhật liên tục'
    },
    {
      icon: <StarOutlined style={{ color: '#722ed1' }} />,
      title: 'Đánh giá chất lượng',
      description: 'Hệ thống đánh giá và phản hồi từ cộng đồng'
    }
  ];

  const installationSteps = [
    {
      title: 'Tải APK',
      description: 'Tải file APK từ website'
    },
    {
      title: 'Cài đặt',
      description: 'Cho phép cài đặt từ nguồn không xác định'
    },
    {
      title: 'Khởi động',
      description: 'Mở ứng dụng và đăng nhập'
    },
    {
      title: 'Sử dụng',
      description: 'Khám phá các tính năng của ứng dụng'
    }
  ];

  return (
    <>
      <HomePageHeader />
      <div style={{ padding: '100px 24px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
        {/* Header Section */}
        <Card>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16}>
                <Title level={1} style={{ margin: 0 }}>
                  <AndroidOutlined style={{ color: '#52c41a', marginRight: 12 }} />
                  Mekong Pathfinder
                </Title>
                <Title level={3} type="secondary" style={{ margin: 0 }}>
                  Ứng dụng di động thông minh
                </Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                  Khám phá các tuyến đường tối ưu, theo dõi giao thông và thời tiết thời gian thực 
                  với ứng dụng Mekong Pathfinder. Được thiết kế đặc biệt cho khu vực Đồng bằng sông Cửu Long.
                </Paragraph>
                <Space wrap>
                  <Tag color="green" icon={<CheckCircleOutlined />}>
                    Miễn phí 100%
                  </Tag>
                  <Tag color="blue" icon={<InfoCircleOutlined />}>
                    Không quảng cáo
                  </Tag>
                  <Tag color="purple" icon={<SafetyOutlined />}>
                    Bảo mật cao
                  </Tag>
                </Space>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  border: '2px dashed #d9d9d9'
                }}>
                  <AndroidOutlined style={{ fontSize: '80px', color: '#52c41a' }} />
                </div>
                <Text type="secondary" style={{ marginTop: 16, display: 'block' }}>
                  Icon ứng dụng Mekong Pathfinder
                </Text>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Features Section */}
        <Card title="Tính năng nổi bật">
          <Row gutter={[16, 16]}>
            {appFeatures.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card size="small" hoverable>
                  <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px' }}>{feature.icon}</div>
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

        {/* Installation Guide */}
        <Card title="Hướng dẫn cài đặt">
          <Steps
            direction="horizontal"
            current={-1}
            items={installationSteps.map(step => ({
              title: step.title,
              description: step.description
            }))}
            style={{ marginBottom: 24 }}
          />
          
          <Alert
            message="Lưu ý quan trọng"
            description="Để cài đặt ứng dụng, bạn cần cho phép cài đặt từ 'Nguồn không xác định' trong cài đặt bảo mật của thiết bị Android."
            type="warning"
            showIcon
            style={{ marginBottom: 16 }}
          />
          
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" title="Yêu cầu hệ thống">
                <List
                  size="small"
                  dataSource={[
                    'Android 6.0 trở lên',
                    'RAM: Tối thiểu 2GB',
                    'Dung lượng: 50MB',
                    'Kết nối Internet'
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                      {item}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" title="Hỗ trợ">
                <List
                  size="small"
                  dataSource={[
                    'Email: support@mekongpathfinder.com',
                    'Hotline: 1900-xxxx',
                    'Thời gian: 8:00 - 17:00',
                    'Thứ 2 - Thứ 6'
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <InfoCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                      {item}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Download Form */}
        <Card title="Tải xuống ứng dụng">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Title level={4}>Thông tin cá nhân</Title>
                <Paragraph type="secondary">
                  Vui lòng cung cấp thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất và 
                  gửi thông báo về các phiên bản cập nhật mới.
                </Paragraph>
                
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleDownload}
                  requiredMark={false}
                >
                  <Form.Item
                    name="name"
                    label="Họ và tên"
                    rules={[
                      { required: true, message: 'Vui lòng nhập họ và tên!' },
                      { min: 2, message: 'Họ và tên phải có ít nhất 2 ký tự!' }
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Nhập họ và tên của bạn"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email!' },
                      { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Nhập địa chỉ email của bạn"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      size="large"
                      icon={<DownloadOutlined />}
                      style={{ width: '100%' }}
                    >
                      Tải xuống APK
                    </Button>
                  </Form.Item>
                </Form>
              </Space>
            </Col>
            
            <Col xs={24} md={12}>
              <Card title="Thống kê tải xuống" size="small">
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <div style={{ textAlign: 'center' }}>
                        <Title level={2} style={{ margin: 0, color: '#52c41a' }}>1,234</Title>
                        <Text type="secondary">Lượt tải</Text>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div style={{ textAlign: 'center' }}>
                        <Title level={2} style={{ margin: 0, color: '#1890ff' }}>4.8</Title>
                        <Text type="secondary">Đánh giá</Text>
                      </div>
                    </Col>
                  </Row>
                  
                  <Divider />
                  
                  <div>
                    <Text strong>Phiên bản hiện tại:</Text>
                    <Tag color="blue" style={{ marginLeft: 8 }}>v1.0.0</Tag>
                  </div>
                  
                  <div>
                    <Text strong>Cập nhật lần cuối:</Text>
                    <Text style={{ marginLeft: 8 }}>15/12/2024</Text>
                  </div>
                  
                  <div>
                    <Text strong>Kích thước file:</Text>
                    <Text style={{ marginLeft: 8 }}>45.2 MB</Text>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>

      {/* Download Modal */}
      <Modal
        title="Đang tải xuống..."
        open={downloadModalVisible}
        footer={null}
        closable={false}
        width={500}
      >
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Steps
            current={currentStep}
            items={[
              { title: 'Xác thực', description: 'Xác thực thông tin' },
              { title: 'Chuẩn bị', description: 'Chuẩn bị file' },
              { title: 'Tải xuống', description: 'Đang tải xuống' },
              { title: 'Hoàn tất', description: 'Tải xuống thành công' }
            ]}
          />
          
          {currentStep === 3 && (
            <Alert
              message="Tải xuống thành công!"
              description="Cảm ơn bạn đã tải ứng dụng Mekong Pathfinder. Chúc bạn có trải nghiệm tuyệt vời!"
              type="success"
              showIcon
              action={
                <Button size="small" onClick={() => setDownloadModalVisible(false)}>
                  Đóng
                </Button>
              }
            />
          )}
        </Space>
      </Modal>
      </div>
      <HomePageFooter />
    </>
  );
};

export default APKDownload;
