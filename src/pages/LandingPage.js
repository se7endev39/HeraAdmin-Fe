import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../component/Header";

const LandingPageWrapper = styled.div`
  .fullpage-wrapper {
    > div {
      background-size: 100% 100%;

      .fp-tableCell {
        display: block;
        height: 100vh !important;
      }

      h1 {
        font-size: ${(props) => props.theme.widthRatio * 40}px;
        color: #fec100;
        font-family: Orbitron-Black;
        text-shadow: ${(props) => props.theme.widthRatio * 7}px
          ${(props) => props.theme.heightRatio * 7}px
          ${(props) => props.theme.widthRatio * 10}px #00000091;
        text-transform: uppercase;
      }

      p {
        font-size: ${(props) => props.theme.widthRatio * 30}px;
        color: #80f1ed;
        font-family: Orbitron-Medium;
        text-shadow: ${(props) => props.theme.widthRatio * 7}px
          ${(props) => props.theme.heightRatio * 7}px
          ${(props) => props.theme.widthRatio * 10}px;
        line-height: ${(props) => props.theme.heightRatio * 36}px;

        a {
          color: #80f1ed;
        }
        span {
          color: #fec100;
        }
      }

      img {
        width: fit-content;
      }

      button {
        background-image: url("/static/images/bg/pages/landing-page/button-bg.png");
        background-size: 100% 100%;
        background-color: transparent;
        width: ${(props) => props.theme.widthRatio * 330}px;
        height: ${(props) => props.theme.widthRatio * 88}px;
        border: none;
        font-size: ${(props) => props.theme.widthRatio * 38}px;
        color: #fec100;
        font-family: Orbitron-Black;
        text-shadow: 0 0 ${(props) => props.theme.widthRatio * 7}px #00000059;
        padding-top: ${(props) => props.theme.heightRatio * 7}px;
        outline: none;
      }

      @media (max-width: 1080px) {
        h1 {
          font-size: ${(props) => props.theme.widthRatio * 50}px;
          line-height: ${(props) => props.theme.heightRatio * 60}px;
        }
        p {
          font-size: ${(props) => props.theme.widthRatio * 40}px;
          line-height: ${(props) => props.theme.heightRatio * 48}px;
        }
        button {
          width: ${(props) => props.theme.widthRatio * 577}px;
          height: ${(props) => props.theme.heightRatio * 153}px;
          font-size: ${(props) => props.theme.widthRatio * 65}px;
          padding-top: ${(props) => props.theme.heightRatio * 12}px;
        }
      }
    }

    .section {
      height: 100vh !important;
    }

    .section-1 {
      background-image: url("/static/images/bg/pages/landing-page/landing-page-section-1-bg.png");

      .logo {
        width: ${(props) => props.theme.widthRatio * 540}px;
        height: ${(props) => props.theme.heightRatio * 182}px;
        margin-left: ${(props) => props.theme.widthRatio * 79}px;
        margin-top: ${(props) => props.theme.heightRatio * 7}px;
      }

      h1 {
        margin-top: ${(props) => props.theme.heightRatio * 144}px;
        margin-bottom: ${(props) => props.theme.heightRatio * 27}px;
        max-width: ${(props) => props.theme.widthRatio * 895}px;
      }

      p:first-of-type {
        max-width: ${(props) => props.theme.widthRatio * 958}px;
        margin-bottom: ${(props) => props.theme.heightRatio * 36}px;
      }

      button {
        margin-top: ${(props) => props.theme.heightRatio * 33}px;
      }

      @media (max-width: 1080px) {
        background-image: url("/static/images/bg/pages/landing-page/landing-page-section-1-mobile-bg.png");

        .logo {
          width: ${(props) => props.theme.widthRatio * 730}px;
          height: ${(props) => props.theme.heightRatio * 245}px;
          margin-left: ${(props) => props.theme.widthRatio * 60}px;
          margin-top: ${(props) => props.theme.heightRatio * 118}px;
        }

        h1 {
          margin-top: ${(props) => props.theme.heightRatio * 130}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 90}px;
          max-width: ${(props) => props.theme.widthRatio * 798}px;
        }

        p:first-of-type {
          max-width: ${(props) => props.theme.widthRatio * 872}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 45}px;
        }

        p:nth-of-type(2) {
          max-width: ${(props) => props.theme.widthRatio * 796}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 53}px;
        }

        button {
          margin-top: ${(props) => props.theme.heightRatio * 190}px;
        }
      }
    }

    .section-2 {
      background-image: url("/static/images/bg/pages/landing-page/landing-page-section-2-bg.png");

      .fp-tableCell {
        padding-left: ${(props) => props.theme.widthRatio * 99}px;
        padding-top: ${(props) => props.theme.heightRatio * 305}px;
      }

      h1 {
        max-width: ${(props) => props.theme.widthRatio * 420}px;
        margin-bottom: ${(props) => props.theme.heightRatio * 35}px;
      }

      p {
        max-width: ${(props) => props.theme.widthRatio * 635}px;
      }

      .cards {
        position: absolute;
        width: ${(props) => props.theme.widthRatio * 944}px;
        height: ${(props) => props.theme.heightRatio * 795}px;
        top: ${(props) => props.theme.heightRatio * 143}px;
        right: ${(props) => props.theme.widthRatio * 193}px;
      }

      button {
        margin-top: ${(props) => props.theme.heightRatio * 197}px;
        margin-left: -${(props) => props.theme.widthRatio * 17}px;
      }

      @media (max-width: 1080px) {
        background-image: url("/static/images/bg/pages/landing-page/landing-page-section-2-mobile-bg.png");

        .fp-tableCell {
          padding-left: 0;
          padding-top: ${(props) => props.theme.heightRatio * 106}px;
        }

        .text-wrapper {
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        h1 {
          text-align: center;
          max-width: ${(props) => props.theme.widthRatio * 521}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 64}px;
        }

        p {
          text-align: center;
          max-width: ${(props) => props.theme.widthRatio * 927}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 46}px;
        }

        .cards {
          position: relative;
          width: ${(props) => props.theme.widthRatio * 944}px;
          height: ${(props) => props.theme.heightRatio * 795}px;
          top: ${(props) => props.theme.heightRatio * 18}px;
          right: -${(props) => props.theme.widthRatio * 54}px;
        }

        .button-wrapper {
          text-align: center;
        }

        button {
          margin-top: ${(props) => props.theme.heightRatio * 114}px;
          margin-left: 0;
        }
      }
    }

    .section-3 {
      background-image: url("/static/images/bg/pages/landing-page/landing-page-section-3-bg.png");

      .fp-tableCell {
        padding-left: ${(props) => props.theme.widthRatio * 71}px;
        padding-top: ${(props) => props.theme.heightRatio * 91}px;
      }

      h1 {
        max-width: ${(props) => props.theme.widthRatio * 520}px;
        margin-bottom: ${(props) => props.theme.heightRatio * 37}px;
      }

      p {
        max-width: ${(props) => props.theme.widthRatio * 880}px;
        margin-bottom: ${(props) => props.theme.heightRatio * 103}px;
      }

      .battle {
        display: none;
      }

      button {
        margin-left: -${(props) => props.theme.widthRatio * 20}px;
      }

      @media (max-width: 1080px) {
        background-image: url("/static/images/bg/pages/landing-page/landing-page-section-3-mobile-bg.png");

        .fp-tableCell {
          padding-left: 0;
          padding-top: ${(props) => props.theme.heightRatio * 101}px;
        }

        .text-wrapper {
          display: flex;
          align-items: center;
          flex-flow: column;
        }

        h1 {
          text-align: center;
          max-width: ${(props) => props.theme.widthRatio * 471}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 78}px;
        }

        p {
          text-align: center;
          max-width: ${(props) => props.theme.widthRatio * 880}px;
          margin-bottom: ${(props) => props.theme.heightRatio * 47}px;
        }

        .battle {
          display: block;
          margin-top: ${(props) => props.theme.heightRatio * 83}px;
          margin-left: -${(props) => props.theme.widthRatio * 162}px;
          width: ${(props) => props.theme.widthRatio * 1558}px;
          height: ${(props) => props.theme.heightRatio * 953}px;
        }

        .button-wrapper {
          text-align: center;
          margin-top: -${(props) => props.theme.heightRatio * 144}px;
        }

        button {
          margin-left: 0;
          margin-top: 0;
        }
      }
    }

    .section-4 {
      background-image: url("/static/images/bg/pages/landing-page/landing-page-section-4-bg.png");

      .fp-tableCell {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }

      .battle {
        position: absolute;
        width: ${(props) => props.theme.widthRatio * 1558}px;
        height: ${(props) => props.theme.heightRatio * 953}px;
        top: -${(props) => props.theme.heightRatio * 772}px;
        right: -${(props) => props.theme.widthRatio * 115}px;
      }

      .icons-wrapper {
        max-width: ${(props) => props.theme.widthRatio * 1416}px;

        div:first-of-type {
          max-width: ${(props) => props.theme.widthRatio * 650}px;
        }

        div:last-of-type {
          max-width: ${(props) => props.theme.widthRatio * 625}px;
        }
      }

      img {
        margin-bottom: ${(props) => props.theme.heightRatio * 37}px;
      }

      h1 {
        margin-bottom: ${(props) => props.theme.heightRatio * 45}px;
      }

      button {
        margin-top: ${(props) => props.theme.heightRatio * 39}px;
      }

      @media (max-width: 1080px) {
        background-image: url("/static/images/bg/pages/landing-page/landing-page-section-4-mobile-bg.png");

        .fp-tableCell {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }

        .battle {
          display: none;
        }

        .icons-wrapper {
          flex-flow: column;
          align-items: center !important;
          max-width: ${(props) => props.theme.widthRatio * 1416}px;

          div:first-of-type {
            max-width: ${(props) => props.theme.widthRatio * 634}px;
            margin-bottom: ${(props) => props.theme.heightRatio * 90}px;

            img {
              width: ${(props) => props.theme.widthRatio * 469}px;
              height: ${(props) => props.theme.heightRatio * 320}px;
            }
          }

          div:last-of-type {
            max-width: ${(props) => props.theme.widthRatio * 724}px;

            img {
              width: ${(props) => props.theme.widthRatio * 324}px;
              height: ${(props) => props.theme.heightRatio * 320}px;
              margin-bottom: ${(props) => props.theme.heightRatio * 55}px;
            }

            p {
              max-width: ${(props) => props.theme.widthRatio * 590}px;
            }
          }
        }

        img {
          margin-bottom: ${(props) => props.theme.heightRatio * 24}px;
        }

        h1 {
          margin-bottom: ${(props) => props.theme.heightRatio * 34}px;
        }

        button {
          margin-top: ${(props) => props.theme.heightRatio * 58}px;
        }
      }
    }

    .section-5 {
      background-image: url("/static/images/bg/pages/landing-page/landing-page-section-5-bg.png");

      .fp-tableCell {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }

      .logos-wrapper {
        margin: ${(props) => props.theme.heightRatio * 90}px 0
          ${(props) => props.theme.heightRatio * 107}px;
        max-width: ${(props) => props.theme.widthRatio * 955}px;

        img {
          width: ${(props) => props.theme.widthRatio * 143}px;
          height: ${(props) => props.theme.heightRatio * 143}px;
        }
      }

      @media (max-width: 1080px) {
        background-image: url("/static/images/bg/pages/landing-page/landing-page-section-5-mobile-bg.png");

        .logos-wrapper {
          flex-flow: column;

          a {
            margin-bottom: ${(props) => props.theme.heightRatio * 24}px;
          }

          img {
            width: ${(props) => props.theme.widthRatio * 265}px;
            height: ${(props) => props.theme.heightRatio * 265}px;
          }
        }
      }
    }
  }
`;

const LandingPage = ({ history }) => {
  return (
    <LandingPageWrapper>
      <ReactFullpage
        scrollingSpeed={1000}
        scrollHorizontally={true}
        className="landing-page"
        autoScrolling={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`section-1 section 'd-flex' flex-column`}>
                <Header />
                <img
                  src={`/static/images/logo/logo-color.png`}
                  className="logo animation-fadeIn"
                  alt="logo"
                />
                <div className="content-wrapper d-flex flex-column align-items-center">
                  <div className="d-flex flex-column align-items-center animation-slideUp">
                    <h1 className="text-center">
                      Welcome to HERAPASS Sys Admin
                    </h1>
                    {window.innerWidth <= 1080 ? (
                      <>
                        <p className="text-center">
                          HERE you will create your functions for your employees
                        </p>
                        <p className="text-center">
                          You will then assign those functions to your employees address
                        </p>
                      </>
                    ) : (
                      <p className="text-center">
                        HERE you will create your functions for your employees
                        You will then assign those functions to your employees address
                      </p>
                    )}
                    <p className="text-center">
                      Start Creating Your Supply Chain With <span>1000</span> HERC (USD)
                    </p>
                  </div>
                  <button
                    className="hover-effect1 animation-bigEntrance"
                    onClick={(e) => history.push("/lockherc")}
                  >
                    GET START
                  </button>
                </div>
              </div>

              <div className={`section-2 section 'd-flex' flex-column`}>
                <div className="text-wrapper">
                  <h1>You will need to deposit an amount of HERC tokens into your account depending on how strong you want your team to be</h1>
                  {window.innerWidth > 1080 ? (
                    <><p className="text-center">
                      FREE: 1~3 employees
                    </p>
                      <p className="text-center">
                        1,000: 4~9 employees
                      </p><p className="text-center">
                        10,000: 10~99 employees
                      </p><p className="text-center">
                        100,000: 100~499 employees
                      </p><p className="text-center">
                        1,000,000: 500~999 employees
                      </p><p className="text-center">
                        10,000,000: 1000+ employeees
                      </p></>
                  ) : (
                    <>
                      <p>
                        Don’t forget the genesis heroes that have brought the
                        decentralised world.
                      </p>
                      <p>
                        {" "}
                        With their help you will be able to fight and defeat the
                        corporate villains.
                      </p>
                    </>
                  )}
                </div>
                <img
                  src={`/static/images/pages/landing-page/deposit.png`}
                  alt="cards"
                  className="cards"
                />
                <div className="button-wrapper">
                  <button
                    className="hover-effect1"
                    onClick={(e) => history.push("/lockherc")}
                  >
                    GET CARDS
                  </button>
                </div>
              </div>

              <div
                className={`section-3 section 'd-flex' flex-column position-relative`}
              >
                <div className="text-wrapper">
                  <h1>Next you will decide how long you will deposit your HERC for </h1>
                  {window.innerWidth > 1080 ? (
                    <><p className="text-center">
                      3 months
                    </p>
                    <p className="text-center">
                      6 months
                    </p>
                    <p className="text-center">
                      9 months
                    </p>
                    <p className="text-center">
                      12 months
                    </p>
                    <p className="text-center">
                      18 months
                    </p>
                    <p className="text-center">
                      24 months
                    </p>
                    <p className="text-center">
                      36 months
                    </p>

                    </>
                  ) : (
                    <>
                      <p>Get rewarded for your hard work.</p>
                      <p>
                        Stake your Hero cards or Lock up defeated villains and
                        get rewarded with NDR tokens.
                      </p>
                      <p>That's how justice is served.</p>
                    </>
                  )}
                </div>
                <img
                  src={`/static/images/pages/landing-page/howlong.png`}
                  alt="battle"
                  className="battle"
                />
                <div className="button-wrapper">
                  <button
                    className="hover-effect1"
                    onClick={(e) => history.push("/lockherc")}
                  >
                    GET START
                  </button>
                </div>
              </div>

              <div className={`section-4 section position-relative`}>
                <img
                  src={`/static/images/pages/landing-page/howlong.png`}
                  alt="battle"
                  className="battle"
                />
                <div className="icons-wrapper d-flex align-items-start w-100 justify-content-between">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={`/static/images/icons/token_1.png`}
                      alt="inflationary"
                    />
                    <h1>THE PLATFORM</h1>
                    <p className="text-center">
                      From Agri-Food to Technology value chains, HERC can be used for any physical interchangeable item and any entity type of organization in virtually any local, regional, or Global Value Chain.
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={`/static/images/icons/token_2.png`}
                      className="fit-content"
                      alt="autopilot"
                    />
                    <h1>TOKEN METRICS</h1>
                    <p className="text-center">
                      Blockchain software for tracking physical inventory in a Supply Chain with a digital source to store and review verification information.
                    </p>
                  </div>
                </div>
                <button
                  className="hover-effect1"
                  onClick={(e) => history.push("/lockherc")}
                >
                  GET START
                </button>
              </div>

              <div className={`section-5 section`}>
                <h1 className="text-center">
                TRANSFORMING 
                  <br />
                  SUPPLY CHAIN
                  <br/>
                  ECOSYSTEMS
                </h1>
                <div className="logos-wrapper d-flex align-items-center justify-content-between w-100">
                  <a
                    href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/static/images/icons/logo1.png`}
                      alt="HercAdmins Telegram"
                    />
                  </a>
                  <a
                    href="https://twitter.com/HERC_Hercules"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`/static/images/icons/logo3.png`} alt="" />
                  </a>
                  <a
                    href="https://discord.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`/static/images/icons/logo2.png`} alt="" />
                  </a>
                  <a
                    href="https://medium.com/@herc_token"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/static/images/icons/logo4.png`}
                      alt="HercAdmins Medium"
                    />
                  </a>
                </div>
                <p>
                  <a
                    href="https://info.uniswap.org/pair/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uniswap
                  </a>
                  ,{" "}
                  <a
                    href="https://opensea.io/collection/HercAdmins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Opensea
                  </a>
                  ,{" "}
                  <a
                    href="https://etherscan.io/token/0x2e91e3e54c5788e9fdd6a181497fdcea1de1bcc1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $HERC address
                  </a>
                </p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </LandingPageWrapper>
  );
};

export default withRouter(LandingPage);
