import { css } from "styled-components";

export const mobileh = (props) => {
  return css`
    @media only screen and (max-width: 320px) {
      ${props}
    }
  `;
};

export const mobilew = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tabletw = (props) => {
  return css`
    @media only screen and (max-width: 600px ) {
      ${props}
    }
  `;
};

export const tableth = (props) => {
  return css`
    @media only screen and (max-width: 820px ) {
      ${props}
    }
  `;
};

export const bigtabletw = (props) => {
  return css`
    @media only screen and (max-width: 768px ) {
      ${props}
    }
  `;
};


export const bigtableth = (props) => {
  return css`
    @media only screen and (max-width: 1024px ) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1025px ) {
      ${props}
    }
  `;
};