import React from 'react'
import styled from 'styled-components'
import VT323 from './../assets/fonts/VT323-Regular.ttf'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
      font-family: 'VT323' ;
      src: url(${VT323});
    }
`

export const DivContainerIntro = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url('https://cutewallpaper.org/21/desktop-background-gif/Pokemon-Gold-Desktop-Background-Animation-Album-on-Imgur.gif');
  background-size: cover;
`

export const Button = styled.button`
font-family: VT323;
background-color: #1DA1F2;
position: absolute;
right: 45%;
top: 78%;
font-size: 24px;
  width: 150px;
  height: 50px;
  background: #06C1DE;
  border: 0px;
  box-shadow: 
    inset -4px 2px 1px 1px grey,
    inset -4px -2px 1px 1px lightgray,
    inset 4px 0px 1px 1px lightgray; 

    &:hover{
      cursor: pointer;
	background-color: #1DA1F2;
    }
    &:active{
  box-shadow: 
    -4px 2px 1px 1px grey,
    -4px -2px 1px 1px lightgray,
    4px 0px 1px 1px lightgray; 
    }
    &:after{
      content: '';
  background: black;
  position: absolute;
  left: -2.5%;
  top: 0;
  width: 105%;
  height: 100%;
  z-index: -1;
    }
    &:before{
      content: '';
  background: black;
  position: absolute;
  left: 0;
  top: -5%;
  width: 100%;
  height: 113%;
  z-index: -1;
    }
`
