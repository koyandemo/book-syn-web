import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer-section'>
      <div class='footer-bottom'>
        <p class='footer-copyright'>{`Copyright © ${new Date().getFullYear()} . All Rights Reserved.`}</p>
        {/* <p class='footer-credit'>
          Design by <em>Wai Yan</em>
        </p> */}
      </div>
    </footer>
  )
}

export default Footer
