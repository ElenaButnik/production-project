import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ul className={cls.links}>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
            MainPage
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
            About
          </AppLink>
        </li>
      </ul>
    </div>
  );
};
