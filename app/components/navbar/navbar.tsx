"use client"

import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import styles from "./navbar.module.css";
import LogoContainer from "../logoContainer/logoContainer";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <div className={styles.hamburger}>
          <Link href="/components/sidebar"><RxHamburgerMenu /></Link>
        </div>
        <LogoContainer title="We One Infotech" />
      </div>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search for Products..."
        />
        <button className={styles.button}>
          <AiOutlineSearch className={styles.icons} />
        </button>
      </div>
      <div className={styles.options}>
        <button className={styles.button} id={styles["liked-product-btn"]}>
          <CiHeart className={styles.icons} />
        </button>
        <button className={styles.button} id={styles["login-btn"]}>
          <Link href="/auth/login">
            <AiOutlineUser className={styles.icons} />
          </Link>
        </button>
        <button className={styles.button} id={styles["cart-btn"]}>
          <Link href="/payment">
            <AiOutlineShoppingCart className={styles.icons} />
          </Link>
        </button>
        <button className={styles.button} id={styles["cart-btn"]}>
          <MdShoppingCartCheckout className={styles.icons} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
