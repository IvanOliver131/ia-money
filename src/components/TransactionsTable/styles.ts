import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
    
      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child{
        border-radius: 0 0.25rem 0.25rem 0;
        padding-left: 0;
      }

      &.deposit {
        color: var(--green)
      }

      &.withdraw {
        color: var(--red)
      }

      img {
        height: 1.5rem;

        transition: 0.2s;

        &:hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }
    }
  }
`;