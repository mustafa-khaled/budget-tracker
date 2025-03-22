import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const navItems = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Manage",
    link: "/manage",
  },
];

export default function Navbar() {
  return (
    <>
      <DesktopNavbar navItems={navItems} />
      <MobileNavbar navItems={navItems} />
    </>
  );
}
