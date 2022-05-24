import React from "react";
import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);
const HeaderTop = () => {
    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("header__menu__left")}>
                    <div className={cx("header__brand")}>
                        <GiBlackBook className={cx("brand__icon")} />
                        <h1 className={cx("header__brand__title")}>
                            ABC <span>book</span>
                        </h1>
                    </div>
                    <form action="#" className="header__search">
                        <input type="text" id="search" />
                        <AiOutlineSearch />
                    </form>
                    <div className="header-menu-right">
                        <div className="header-main-menu">
                            <div className="header-menu-item">
                                <Link to="/">FAQ</Link>
                            </div>
                            <div className="header-menu-item">
                                <Link to="/">Track Order</Link>
                            </div>
                            <div className="header-menu-item shopping-cart">
                                <AiOutlineShoppingCart />
                            </div>
                            <button className="header-btn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderTop;
