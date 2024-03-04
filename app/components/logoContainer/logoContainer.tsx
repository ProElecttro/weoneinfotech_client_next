import "react";
import Logo from "./WeOneInfotech_Logo.png";
import style from "./LogoContainer.module.css";

import Link from "next/link";
import Image from "next/image";

export default function LogoContainer(props: any) {
  return (
    <Link href="/" className={style.LogoContainer}>
      <Image
        src={Logo}
        alt="We One Infotech"
        width={50}
        // height={500}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>{props.title}</p>
    </Link>
  );
}
