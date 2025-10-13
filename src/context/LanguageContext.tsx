import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data
const translations = {
  vi: {
    // Common
    'common.notifications': 'Thông báo',
    'common.all': 'Tất cả',
    'common.unread': 'Chưa đọc',
    'common.flood': 'Lũ lụt',
    'common.weather': 'Thời tiết',
    'common.traffic': 'Giao thông',
    'common.emergency': 'Khẩn cấp',
    'common.close': 'Đóng',
    'common.markAllRead': 'Đánh dấu tất cả đã đọc',
    'common.deleteAll': 'Xóa tất cả',
    'common.markAsRead': 'Đánh dấu đã đọc',
    'common.markAsUnread': 'Đánh dấu chưa đọc',
    'common.delete': 'Xóa',
    'common.noNotifications': 'Không có thông báo nào',
    'common.loading': 'Đang tải...',
    
    // Time
    'time.justNow': 'Vừa xong',
    'time.minutesAgo': '{count} phút trước',
    'time.hoursAgo': '{count} giờ trước',
    'time.daysAgo': '{count} ngày trước',
    'time.expires': 'Hết hạn: {time}',
    
    // Severity
    'severity.low': 'THẤP',
    'severity.medium': 'TRUNG BÌNH',
    'severity.high': 'CAO',
    'severity.critical': 'NGUY HIỂM',
    
    // Navigation
    'nav.dashboard': 'Bảng điều khiển',
    'nav.cameras': 'Quản lý Camera',
    'nav.repairs': 'Quản lý Sửa chữa',
    'nav.sos': 'Quản lý SOS',
    'nav.users': 'Quản lý Người dùng',
    'nav.governments': 'Quản lý Chính phủ',
    'nav.incidents': 'Sự cố',
    'nav.routes': 'Tuyến đường',
    'nav.floods': 'Lũ lụt',
    'nav.communities': 'Cộng đồng',
    'nav.map': 'Bản đồ',
    'nav.profile': 'Hồ sơ',
    
    // Homepage
    'home.explore': 'Khám phá Mekong Pathfinder',
    'home.weather': 'Theo dõi thời tiết chính xác',
    'home.community': 'Cộng đồng người dùng',
    'home.learnMore': 'Tìm hiểu thêm',
    'home.watchDemo': 'Xem demo',
    'home.join': 'Tham gia',
    'home.download': 'Tải ứng dụng',
    'home.feedback': 'Góp ý',
    'home.guide': 'Hướng dẫn',
    'home.quickActions': 'Hành động nhanh',
    'home.features': 'Tính năng nổi bật',
    'home.howToUse': 'Hướng dẫn sử dụng',
    'home.achievements': 'Thành tựu',
    'home.testimonials': 'Người dùng nói gì',
    'home.contact': 'Liên hệ & Hỗ trợ',
    
    // Features
    'features.smartMap': 'Bản đồ thông minh',
    'features.weather': 'Thời tiết chính xác',
    'features.safety': 'An toàn tuyệt đối',
    'features.community': 'Cộng đồng',
    
    // Steps
    'steps.download': 'Tải ứng dụng',
    'steps.register': 'Đăng ký tài khoản',
    'features.explore': 'Khám phá tính năng',
    'steps.share': 'Chia sẻ trải nghiệm',
    
    // Profile
    'profile.myProfile': 'Hồ sơ cá nhân',
    'profile.settings': 'Cài đặt',
    'profile.logout': 'Đăng xuất',
    
    // Language
    'language.vietnamese': 'Tiếng Việt',
    'language.english': 'English',
  },
  en: {
    // Common
    'common.notifications': 'Notifications',
    'common.all': 'All',
    'common.unread': 'Unread',
    'common.flood': 'Flood',
    'common.weather': 'Weather',
    'common.traffic': 'Traffic',
    'common.emergency': 'Emergency',
    'common.close': 'Close',
    'common.markAllRead': 'Mark all as read',
    'common.deleteAll': 'Delete all',
    'common.markAsRead': 'Mark as read',
    'common.markAsUnread': 'Mark as unread',
    'common.delete': 'Delete',
    'common.noNotifications': 'No notifications',
    'common.loading': 'Loading...',
    
    // Time
    'time.justNow': 'Just now',
    'time.minutesAgo': '{count} minutes ago',
    'time.hoursAgo': '{count} hours ago',
    'time.daysAgo': '{count} days ago',
    'time.expires': 'Expires: {time}',
    
    // Severity
    'severity.low': 'LOW',
    'severity.medium': 'MEDIUM',
    'severity.high': 'HIGH',
    'severity.critical': 'CRITICAL',
    
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.cameras': 'Manage Cameras',
    'nav.repairs': 'Manage Repairs',
    'nav.sos': 'Manage SOS',
    'nav.users': 'Manage Users',
    'nav.governments': 'Manage Governments',
    'nav.incidents': 'Incidents',
    'nav.routes': 'Routes',
    'nav.floods': 'Floods',
    'nav.communities': 'Communities',
    'nav.map': 'Map',
    'nav.profile': 'Profile',
    
    // Homepage
    'home.explore': 'Explore Mekong Pathfinder',
    'home.weather': 'Accurate weather tracking',
    'home.community': 'User community',
    'home.learnMore': 'Learn more',
    'home.watchDemo': 'Watch demo',
    'home.join': 'Join',
    'home.download': 'Download app',
    'home.feedback': 'Feedback',
    'home.guide': 'Guide',
    'home.quickActions': 'Quick actions',
    'home.features': 'Key features',
    'home.howToUse': 'How to use',
    'home.achievements': 'Achievements',
    'home.testimonials': 'What users say',
    'home.contact': 'Contact & Support',
    
    // Features
    'features.smartMap': 'Smart map',
    'features.weather': 'Accurate weather',
    'features.safety': 'Absolute safety',
    'features.community': 'Community',
    
    // Steps
    'steps.download': 'Download app',
    'steps.register': 'Register account',
    'features.explore': 'Explore features',
    'steps.share': 'Share experience',
    
    // Profile
    'profile.myProfile': 'My Profile',
    'profile.settings': 'Settings',
    'profile.logout': 'Logout',
    
    // Language
    'language.vietnamese': 'Tiếng Việt',
    'language.english': 'English',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    // Replace parameters in translation
    if (params) {
      return Object.entries(params).reduce((str, [paramKey, paramValue]) => {
        return str.replace(`{${paramKey}}`, String(paramValue));
      }, translation);
    }

    return translation;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
