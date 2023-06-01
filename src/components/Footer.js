import React from 'react';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment" style={{ backgroundColor: 'black', padding: '2rem 0' }}>
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a href="/" className="item">Contact Us</a>
              <a href="/" className="item">About Us</a>
              <a href="/" className="item">Privacy Policy</a>
            </div>
          </div>
          <div className="ten wide column">
            <h4 className="ui inverted header">Owner</h4>
            <p style={{color: 'grey'}}>This Web Application belongs to GrpID: 69</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;