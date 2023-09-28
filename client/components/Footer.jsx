import React from "react";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import {
  SiNestjs,
  SiSequelize,
  SiAntdesign,
  SiAxios,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJest,
  SiAmazonaws,
  SiRedux,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <p>EXPERIENCED WITH:</p> */}
      <ul className="footer-list">
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
          <li className="footer">
            <p className="footer-item">JAVASCRIPT</p>
            <BiLogoJavascript className="footer-link" />
          </li>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <li className="footer">
            <p className="footer-item">TYPESCRIPT</p>
            <BiLogoTypescript className="footer-link" />
          </li>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard."
          target="_blank"
        >
          <li className="footer">
            <p className="footer-item">HTML5</p>
            <SiHtml5 className="footer-link" />
          </li>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <li className="footer">
            <p className="footer-item">CSS3</p>
            <SiCss3 className="footer-link" />
          </li>
        </a>
        <a href="https://react.dev/" target="_blank">
          <li className="footer">
            <p className="footer-item">REACT</p>
            <FaReact className="footer-link" />
          </li>
        </a>
        <a href="https://typeorm.io/" target="_blank">
          <li className="footer">
            <p className="footer-item">TYPEORM</p>
            <PiBracketsCurly className="footer-link" />
          </li>
        </a>
        <a href="https://www.postgresql.org/" target="_blank">
          <li className="footer">
            <p className="footer-item">POSTGRES</p>
            <BiLogoPostgresql className="footer-link" />
          </li>
        </a>
        <a href="https://nestjs.com/" target="_blank">
          <li className="footer">
            <p className="footer-item">NESTJS</p>
            <SiNestjs className="footer-link" />
          </li>
        </a>
        <a href="https://sequelize.org/" target="_blank">
          <li className="footer">
            <p className="footer-item">SEQUELIZE</p>
            <SiSequelize className="footer-link" />
          </li>
        </a>
        <a href="https://ant.design/" target="_blank">
          <li className="footer">
            <p className="footer-item">ANT DESIGN</p>
            <SiAntdesign className="footer-link" />
          </li>
        </a>
        <a href="https://axios-http.com/docs/intro" target="_blank">
          <li className="footer">
            <p className="footer-item">AXIOS</p>
            <SiAxios className="footer-link" />
          </li>
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <li className="footer">
            <p className="footer-item">REDUX</p>
            <SiRedux className="footer-link" />
          </li>
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <li className="footer">
            <p className="footer-item">TAILWINDCSS</p>
            <SiTailwindcss className="footer-link" />
          </li>
        </a>
        <a href="https://jestjs.io/" target="_blank">
          <li className="footer">
            <p className="footer-item">JEST</p>
            <SiJest className="footer-link" />
          </li>
        </a>
        <a href="https://aws.amazon.com/" target="_blank">
          <li className="footer">
            <p className="footer-item">AWS</p>
            <SiAmazonaws className="footer-link" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
