import styled from "styled-components";

export const PageContent = styled.div`
  padding-bottom: 120px;
  box-sizing: content-box;
  margin: 0;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

export default PageWrapper;
