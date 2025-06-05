import React, { useState } from 'react';

export default function ImageHoverLink(props){
  const imageUrl = props.imageUrl || '/api/placeholder/800/600';
  const title = props.title || 'ZERO DAY DEFENSE';
  const description = props.description || 'Stop new threats before they strike, with cutting-edge technology.';
  const linkUrl = props.linkUrl || 'https://example.com';

  const [isHovered, setIsHovered] = useState(false);
  
  // Component styles
  const styles = {
    container: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '400px',
      height: '540px'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 500ms ease-in-out',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    contentContainer: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px',
      zIndex: 1
    },
    textContent: {
      transform: isHovered ? 'translateY(-16px)' : 'translateY(0)',
      transition: 'transform 500ms ease-in-out'
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      marginBottom: '8px'
    },
    description: {
      color: 'white',
      fontSize: '14px'
    },
    arrowContainer: {
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 500ms ease-in-out'
    },
    link: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2
    }
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div style={styles.backgroundImage} />
      
      {/* Overlay */}
      <div style={styles.overlay} />
      
      {/* Content Container */}
      <div style={styles.contentContainer}>
        {/* Text Content */}
        <div style={styles.textContent}>
          <h4 style={styles.title}>{title}</h4>
          <p style={styles.description}>{description}</p>
        </div>
        
        {/* Arrow Button */}
        {/* <div style={styles.arrowContainer}>
          <svg 
            width="32" 
            height="32" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
          >
            <path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z" />
          </svg>
        </div> */}
      </div>
      
      {/* Clickable link wrapper */}
      {/* <a 
        href={linkUrl} 
        style={styles.link}
        aria-label={`Learn more about ${title}`}
      /> */}
    </div>
  );
}