import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4> ghjghsd</h4>
              <ul className="list-unstyled">
                <li>hhhghhgj</li>
                <li>hhhghhgj</li>
                <li>hhhghhgj</li>
                <li>hhhghhgj</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4> ghjghsd</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4> ghjghsd</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4> ghjghsd</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
                <li>
                  <a href="/">fhghdss </a>
                </li>
              </ul>
            </div>
          </div>
          /*Footer*/
          <div className=" footer-bottom">
            <p className="text-xs-center">
              {" "}
              &copy;{new Date().getFullYear()}city Guide App-All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
