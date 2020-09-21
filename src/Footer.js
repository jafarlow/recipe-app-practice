import React from 'react';

//NOTE: `&nbsp;` forces a space to exist in text when it would otherwise wouldn't due to default structure interactions between elements

function Footer() {
  return (
    <footer className="footer">
      <div className="invisible-element"></div>
      <p className="footer-text">Created by Jacob Farlow.&nbsp;
        <a
          href="https://jafarlow.github.io/portfolio/"
          target="_blank"
          rel="external nofollow noopener noreferrer">Visit his portfolio
        </a> for more of his work.
      </p>
      <div>
      <a
        href="https://www.edamam.com"
        title="Powered by Edamam"
        target="_blank"
        rel="external nofollow noopener noreferrer"
      >
        <img
          alt="Powered by Edamam"
          src="https://developer.edamam.com/images/badge.png"
          height="40" width="200"
        />
      </a>
      </div>
    </footer>
  )
}

export default Footer;
