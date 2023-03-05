import styles from "./Footer.module.scss"

import { ReactComponent as Logo } from 'icons/logo.svg'
import { ReactComponent as Fb } from 'icons/facebook.svg'
import { ReactComponent as Ig } from 'icons/instagram.svg'

function FooterSection({title, children}){
    return(
        <section className="footer-section">
          <h3 className="section-title">{title}</h3>
          <div className="section-content">
            {children}
          </div>
        </section>
    )
}

export default function Footer(){
    return(
    <footer className="site-footer">
      <div className="footer-container container">
        <div className="footer-section footer-logo-container">
         <Logo />
        </div>
        <FooterSection title="客戶服務">
            <a className="page-link" href="#">運送說明</a>
            <a className="page-link" href="#">退換貨相關</a>
            <a className="page-link" href="#">付款資訊</a>
            <a className="page-link" href="#">FAQ</a>
        </FooterSection>
        <FooterSection title="關於我們">
            <a className="page-link" href="#">品牌故事</a>
            <a className="page-link" href="#">媒體聯繫</a>
            <a className="page-link" href="#">Press kit</a>
        </FooterSection>
        <FooterSection title="資訊">
            <a className="page-link" href="#">隱私權政策</a>
            <a className="page-link" href="#">Cookie</a>
            <a className="page-link" href="#">GDPR</a>
        </FooterSection>
        <FooterSection title="追蹤 ALPHA Shop">
        <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
             <Fb/>
             <Ig/>
            </div>
        </FooterSection>
      </div>
    </footer>
)
}