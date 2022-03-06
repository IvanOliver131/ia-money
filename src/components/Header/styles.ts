import styled from 'styled-components'

export const Container = styled.header`
  /* background: var(--red); */
  background: #000;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }

  span {
    color: #FFF;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--red);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
  
    &:hover {
      filter: brightness(0.9);
    }
  }
`;