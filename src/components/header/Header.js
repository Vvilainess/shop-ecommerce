import React from "react";
import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const mainMenu = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Categories",
        path: "/categories",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Pages",
        path: "/pages",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">
                <div className="grid wide">
                    <div className="row">
                        <div className="col">
                            <div className="header__top__logo">
                                <GiBlackBook className="header__top__logo__icon" />
                                <h1 className="header__top__logo__title">
                                    ABC <span>book</span>
                                </h1>
                            </div>
                            <div className="header__search-input">
                                <input
                                    type="text"
                                    name="search"
                                    id="header__search-input"
                                />
                                <div className="search__icon__wrapper">
                                    <AiOutlineSearch className="search__icon" />
                                </div>
                            </div>
                            <div className="header__info__menu">
                                <div className="header__info__menu__item">
                                    <Link to="/">FAQ</Link>
                                </div>
                                <div className="header__info__menu__item">
                                    <Link to="/">Track Order</Link>
                                </div>
                                <div className="header__info__menu__item">
                                    <AiOutlineShoppingCart className="shoping-cart" />
                                </div>
                                <div className="header__info__menu__item">
                                    <Link to="/sign-in" className="header__btn">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="grid wide">
                    <div className="row">
                        <div className="col">
                            <div className="main__menu">
                                <ul className="main__navigation">
                                    {mainMenu.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="main__menu__item"
                                        >
                                            <Link
                                                className="main__menu__link"
                                                to={item.path}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
