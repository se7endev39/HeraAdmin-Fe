import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`

  &.battle {
 	  background-image: url('/static/images/bg/layout/battle-bg.png');
  }
  &.home {
    background-image: url("/static/images/bg/pages/landing-page/landing-page-section-1-bg.png");
  }
  .nav-pills {
    margin: -30px 0 19px;

    .nav-item {
      .nav-link {
        color: #80f1ed;
        font-size: 30px;
        font-family: Orbitron-Medium;
        padding: 8px;
        outline: none;
        text-shadow: 7px 7px 10px #80f1ed91;

        &.active {
          color: #fec100;
          font-family: Orbitron-Black;
          background: none;
          text-shadow: 0 0 7px #fec10059;
        }
      }
    }
  }
`;

const LandLayout = ({ children, bg }) => {
  return (
    <LayoutWrapper className={bg}>
      {children}
    </LayoutWrapper>
  )
};

export default LandLayout;
