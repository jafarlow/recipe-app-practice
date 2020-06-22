import React from 'react';

//NOTE: `&nbsp;` forces a space to exist in text when it would otherwise wouldn't due to default structure interactions between elements

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Created by Jacob Farlow.&nbsp;
        <a
          href="https://jafarlow.github.io/portfolio/"
          target="_blank"
          rel="external nofollow noopener noreferrer">Visit his portfolio
        </a> for more of his work.
      </p>
    </footer>
  )
}

export default Footer;
