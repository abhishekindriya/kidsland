import React from 'react';

const SocialLinks = () => {
  const shareUrl = encodeURIComponent('https://kidsland.onrender.com/');
  const message = encodeURIComponent('Check this out!');

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${message}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#25D366')}
      >
        Share on WhatsApp
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#1877F2')}
      >
        Share on Facebook
      </a>

      {/* Instagram (open profile since direct sharing is not allowed) */}
      <a
        href="https://www.instagram.com/yourprofile/"
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#E1306C')}
      >
        Visit on Instagram
      </a>
    </div>
  );
};

const buttonStyle = (bgColor) => ({
  padding: '10px 15px',
  borderRadius: '6px',
  backgroundColor: bgColor,
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
});

export default SocialLinks;
