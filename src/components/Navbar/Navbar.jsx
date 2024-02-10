import Link from "next/link";
import styles from "./Navbar.module.css";
import links from "./data";
import Button from "../../element/Button/Button";
import Logo from "@/element/Logo/logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <Button />
      </div>
    </div>
  );
}

export default Navbar;
