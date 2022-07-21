import styled from "styled-components"

export const DivContainer = styled.div`

display: flex;
flex-wrap: wrap;
column-gap: 10px;
row-gap: 50px;
margin: 10px;
`



export const CardRed = styled.div`

width: 440px;
height: 210px;
background-color:#EAAB7D;
border-radius: 12px;

`

export const CardBlue = styled.div`

width: 440px;
height: 210px;
background-color:#71C3FF;
border-radius: 12px;

`

export const CardGreen = styled.div`

width: 440px;
height: 210px;
background-color:#76A866;
border-radius: 12px;

`

export const CardBrow = styled.div`

width: 440px;
height: 210px;
background-color:#BF9762;
border-radius: 12px;

` 

export const CardPoison = styled.div`


width: 440px;
height: 210px;
background-color:#729F92;
border-radius: 12px;


`

export const TextId = styled.p`
padding:0.5rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: white;
`

export const PokemonName = styled.p`
padding:0.5rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: white;
`

export const PokemonImage= styled.img`

width: 150px;
height: 150px;
margin-left: 20vw;
margin-top: -20vh;
`

export const TypeFire = styled.div`


background-color: #F44900;
font-family: Poppins ;
width: 75px;
height: 31px;
border-radius: 8px;
color: white;
border: 1px dashed rgba(255, 255, 255, 0.47);
`

export const TypePoison = styled.div`

padding:0.5rem;
background-color: #AD61AE;
font-family: Poppins ;
width: 75px;
height: 31px;
border-radius: 8px;
color: white;
border: 1px dashed rgba(255, 255, 255, 0.47);
`

export const TypeGrass = styled.div`
padding-left:0.5rem;
margin:0.5rem;
background-color: #70B873;;
font-family: Poppins ;
width: 75px;
height: 31px;
border-radius: 8px;
color: white;
border: 1px dashed rgba(255, 255, 255, 0.47);
`

export const TypeWater = styled.div`


background-color: #33A4F5;
font-family: Poppins ;
width: 75px;
height: 31px;
border-radius: 8px;
color: white;
border: 1px dashed rgba(255, 255, 255, 0.47);
`

export const DivButton = styled.div`
display: flex;
justify-content: space-between;

`

export const Button = styled.button`

background-color: lightskyblue;
color: white;
width: 5vw;
border-radius: 0.3rem;
margin:0.5rem;
height: 5vh;
font-family: Verdana, Geneva, Tahoma, sans-serif;

&:hover{

  cursor: pointer;

}

`