import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants/data";
import profile from "../assets/pngwing.png";

// props를 그대로 받아서 name에 접근
const Header = () => {
  const isLoggedIn = false;

  return (
    <div className="w-full shadow-custom">
      <div className="container flex items-center justify-between ">
        <div className="logo-wrapper flex items-center gap-2">
          <div className="logo w-10 h-10 rounded-full border border-neutral-700/80 flex items-center justify-center">
            <div className="round-dot w-8 h-8 rounded-full">
              <img src="/logo192.png" alt="" />
            </div>
          </div>
          <span className="logo-text text-lg">MediBook</span>
        </div>
        <ul className="nav-wrapper flex gap-3">
          {navItems.map((item, index) => (
            <li key={index}>
              {/* 리액트에서는 a 태그를 사용하지 않고, Link 컴포넌트를 사용한다.
                  경로는 href 대신 to를 사용한다. */}
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex gap-4 items-center">
            {isLoggedIn ? (
              <>
                <li>
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full overflow-hidden w-7 h-7"
                  />
                </li>
                <li>마샬님</li>
                <li>
                  <button className="btn">로그아웃</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="btn">
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
