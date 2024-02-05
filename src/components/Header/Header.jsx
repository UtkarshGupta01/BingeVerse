import logo from "/images/Logo.png";
import {
  NavBar,
  NavUl,
  NavUlItems,
  Logo,
  SearchIcon,
} from "./styles/Header.styled";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Headers = ({ showSearch }) => {
  const [navbar, setNavbar] = useState("top");
  const [prevScrollVal, setPrevScrollVal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > prevScrollVal) {
        setNavbar("hide");
      } else {
        setNavbar("show");
      }
    } else {
      setNavbar("top");
    }
    setPrevScrollVal(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [prevScrollVal]);

  const handleHeaderNavigation = (type) => {
    if (type == "home") {
      navigate(`/`);
    } else if (type == "movie") {
      navigate(`/explore/movies`);
    } else {
      navigate(`/explore/tv`);
    }
  };
  return (
    <NavBar $setnavbar={navbar}>
      <div className="logo">
        <Logo
          src={logo}
          alt="logo"
          onClick={() => handleHeaderNavigation("home")}
        />
      </div>
      <NavUl className="nav-list">
        <NavUlItems onClick={() => handleHeaderNavigation("movie")}>
          Movies
        </NavUlItems>
        <NavUlItems onClick={() => handleHeaderNavigation("tv")}>
          TV Shows
        </NavUlItems>
      </NavUl>
      <SearchIcon className="search-bar" onClick={() => showSearch(true)}>
        <FaSearch />
      </SearchIcon>
    </NavBar>
  );
};

export default Headers;
