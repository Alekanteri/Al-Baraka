import React from "react";
import "../sass/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBody">
        <p>
          <a href="#policy">Политика конфиденциальности</a>
        </p>
        <div className="footerSplit">
          <p>ООО "Атлант"</p>
          <p>ИНН 0608053408</p>
          <p>КПП 060801001</p>
        </div>
        <p>© 2015-2023 Copyright «Al-Baraka».</p>
      </div>
    </footer>
  );
};

export default Footer;
