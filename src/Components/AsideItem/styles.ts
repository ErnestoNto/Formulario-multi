import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  margin-bottom: 10px;
  
  a {
    color: #fafafa;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 2px solid ${(props) => (props.active ? `#CC59D2` : `#9DA9A0`)};
  }

  p {
    font-size: 0.8rem;
    color: #d8d8d4;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div:nth-child(2) {
    align-items: center;
  }

  .icon {
    padding: 8px;
    background-color: ${(props) => (props.active ? `#CC59D2` : `#9DA9A0`)};
    border-radius: 50%;
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? `#CC59D2` : `#9DA9A0`)};
  }
`;
