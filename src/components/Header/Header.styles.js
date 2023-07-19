import { styled } from "styled-components";

export const LeftSection = styled.div`
  color: white;
  font-size: 12px;
  margin-left: 150px;
  padding: 15px;

  @media (max-width: 768px ) {
    margin: 20px auto;
  }

  h1{
    margin: 0;
  }
  p{
    font-size: 16px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-weight: 600;
  margin: 0;

  li {
    padding: 18px 50px;
    a{
      padding-bottom: 7px;
      text-decoration: none;
      color: #ffffff;
      cursor: pointer;
  }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    border: 1px solid black;
    background-color: #0d2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(b0)':'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 250px;
    padding: 0;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      margin: auto;
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 16px;
  right: 20px;
  display: flex;
  justifycontent: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 1.5rem;
    margin-top: 5px;
    height: 2px;
    background-color: ${({ open }) => (open ? "red" : "#f1f1f1")};
    border-radius: 10px;
    transform-origin: 2px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    @media (min-width: 768px){
        display: none;
    }
  }
`;

export const RightBody = styled.div`
    background: linear-gradient(45deg, red, blue);
    margin-top: -50px;
    margin-right: 70px;
    border: 1px solid red;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    img{
        height: 370px;
        width: 475px;
    }


    @media (max-width: 768px) {
        margin-right: 0;
        max-width: 80%;
        margin: auto;
        margin-top: 20px;
        img{
            height: 320px;
        }
    }
`;