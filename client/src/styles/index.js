import styled from "styled-components";

export * from "./header";
export * from "./buttons";
export * from "./inputs";

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
  padding-left: 201px;
  padding-top: 85px;
  background: var(--bg-light);
  color: var(--dark-purpule);
  @media (max-width: 1024px) {
    & {
      padding-left: 65px;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.fd || "row"};
`;
