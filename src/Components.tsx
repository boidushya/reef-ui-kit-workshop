import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  .button-container {
    max-width: 44rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const HeadingContainer = styled.div`
  gap: 0.5rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  .text-heading {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .text-light {
    font-size: 0.875rem;
  }
`;

export const ButtonContainer = styled.div`
  padding-bottom: 4rem;
`;
