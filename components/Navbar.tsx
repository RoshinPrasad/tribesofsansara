import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 h-28 border-b border-gray-300" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('https://bhf-cdn.azureedge.net/bhf-blob-prod/0032150_range-light-grey-mountains-wallpaper_600.jpeg')", backgroundSize: "fit", backgroundPosition: "center" }}>

      <Link href="/">
      <Image src="/hilink-logo.png"  alt="logo" width={150} height={150}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16  text-black font-serif lg:text-lg flexCenter cursor-pointer pb-1.5 lg:pt-10 transition-all hover:font-extrabold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
