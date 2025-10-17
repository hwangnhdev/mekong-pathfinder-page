import React from 'react';
import { Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface NavigationMenuProps {
  items: MenuItem[];
  className?: string;
  style?: React.CSSProperties;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  items, 
  className, 
  style 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div 
      className={className}
      style={{ 
        display: 'flex', 
        gap: '8px',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        ...style 
      }}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.key || 
                        (item.key === 'home' && location.pathname === '/');
        return (
          <Button
            key={item.key}
            type="text"
            icon={item.icon}
            onClick={item.onClick}
            style={{
              borderRadius: '25px',
              height: '40px',
              padding: '0 16px',
              fontWeight: '600',
              fontSize: '13px',
              color: isActive ? '#fff' : '#666',
              background: isActive 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'transparent',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              border: 'none',
              boxShadow: isActive 
                ? '0 4px 15px rgba(102, 126, 234, 0.4)' 
                : 'none',
              transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)';
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#666';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <span style={{ 
              position: 'relative', 
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              {item.icon}
              {item.label}
            </span>
            {isActive && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '25px',
                zIndex: 0
              }} />
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default NavigationMenu;
