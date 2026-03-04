import Logo from "../../assets/logo.png";
import S from "./footer.module.scss";
import { CiMail, CiPhone, CiLocationOn, CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.footerContent}>
        <div className={S.footerColuna}>
          <div className={S.logoContainer}>
            <img src={Logo} alt="logo do site, coração verde" />
            <h3>Médicos & Dentistas</h3>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={S.footerColuna}>
          <h3>Contato</h3>
          <ul>
            <li>
              <span className={S.icon}> <CiMail className={S.reactIcons}/></span>
              contato@medico-dentista.org
            </li>
            <li>
              <span className={S.icon}><CiPhone className={S.reactIcons} /></span>
              (11) 3000-0000
            </li>
            <li>
              <span className={S.icon}><CiLocationOn className={S.reactIcons}/></span>
              São Paulo, Brasil
            </li>
          </ul>
        </div>

        <div className={S.footerColuna}>
          <h3>Redes Sociais</h3>
          <ul className={S.socialList}>
            <li><CiFacebook className={S.reactIcons}/> Facebook</li>
            <li><CiInstagram className={S.reactIcons}/> Instagram</li>
            <li><CiLinkedin className={S.reactIcons}/> LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className={S.footerBotton}>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;