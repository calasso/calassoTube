import styled from "styled-components";

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    border-radius: 50%;
    font-weight: 500;
    object-fit: cover;
    width: 100px;
    max-width: 100px;
    height: 100px;

    height: 103px;
    width: 103px;
    border-radius: 50%;
    background-color: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {

      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
