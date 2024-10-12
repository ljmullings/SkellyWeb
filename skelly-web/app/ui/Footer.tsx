const Footer = () => {
    return (
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        <p>© {new Date().getFullYear()} SkellyWeb. All rights reserved.</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;