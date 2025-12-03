import { Facebook, Instagram, Linkedin } from "lucide-react";
import classes from "./footer.module.css";

export default function Footer() {
  const iconColor = "rgb(33,36,61)";

  return (
    <footer className={classes.footer}>
      <nav className={classes.social}>
        <a href="">
          <Facebook color={iconColor} />
        </a>
        <a href="">
          <Instagram color={iconColor} />
        </a>
        <a href="">
          <Linkedin color={iconColor} />
        </a>
      </nav>
      <p className="copyright">Copyright ©2020 All rights reserved </p>
    </footer>
  );
}
