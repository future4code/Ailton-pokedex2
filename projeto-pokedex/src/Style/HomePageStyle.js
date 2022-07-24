import styled from "styled-components";
import VT323 from './../assets/fonts/VT323-Regular.ttf'


export const Header = styled.header`
  background-color: white;
  height: 15vh;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 240px;
  height: 80px;
  margin-top: 1vh;
`;
export const DivButtonPoke = styled.div`
  position: absolute;
  right: 2rem;
`;

export const ButtonPokedex = styled.button`
  background-color: lightskyblue;
  color: white;
  width: 10vw;
  border-radius: 15px;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const Main = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100vw;
  min-height: 85vh;



`;

export const TextHome = styled.h1`
  font-weight: bold;
  font-family: VT323;
  font-size: 40px;
  &:hover{
    color: white} ;
  `

export const DivContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: scroll;
  position: absolute;
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  @font-face {
      font-family: 'VT323' ;
      src: url(${VT323});
    }
`;

export const DivButtonChange = styled.div`

  display: flex;
  justify-content: end;
  margin-right: 2vw;
  margin-bottom: 2vh;


`
export const DivPagination = styled.div`


p{

  font-weight: bold;
  font-size: 25px;
  font-family: VT323;

}

`