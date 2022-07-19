import React, { useContext, useEffect, useState }from 'react'
import { Context } from '../../Constants/createContext'
import {
  DivContainer,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  ButtonPokedex,
  BoxPokemon,
  DivButtonPoke
} from '../../Style/HomePageStyle.js'
import Logo from '../../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../Routes/Coordinator'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { GetPokemons, GetDetails } from './../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/Url'
import axios from 'axios'


function Home() {
  const Navigate = useNavigate()
  const ctx = useContext(Context);
  const [detail, setDetails] = useState([])
  const [dadosPokemon] = GetPokemons(`${BASE_URL}`);

  // const [pokemons, setPokemons] = useState('')


  // useEffect(()=>{

  //   setPokemons(ctx)

  // },[])


  // console.log(pokemons.pokemons.results)


 

const detailPokemon = () =>{



return  GetPokemons(detail)


}

// const GetDetails = (url) => {
//   const [detail, setDetail] = useState([]);
//   console.log(url)

//   useEffect(() => {

//     axios
//       .get(url)
//       .then((res) => {
//         setDetail(res.data);
        
//       })
//       .catch((err) => {
//       });
//   }, [url]);

//   return [detail];
// };



const listPokemon = () =>{



return ctx.pokemons.results &&
   ctx.pokemons.results.map((pokemon) => {

    //  GetDetails(pokemon.url);

      // setDetails(pokemon.url)

        return (
          <BoxPokemon key={pokemon.name}>
              <p>{pokemon.url}</p>
            <h2>
              <strong>{pokemon.name}</strong>
            </h2>
            
          </BoxPokemon>
        );


      });


  }
  

  

 

  

  return (
    <ChakraProvider>

    {/* {console.log(pokemons.pokemons.results)} */}
    {/* {console.log(detail)}  */}
    {/* {console.log(pokemons)} */}
    <DivContainer>
      <GlobalStyle/>
      <Header>

        <LogoImage src={Logo} alt="logo"></LogoImage>

        <DivButtonPoke>
        <Button 
        colorScheme={'twitter'}
        w={'12vw'}
        onClick={()=> goToPage(Navigate, 'pokedex')}>Pokédex</Button>
        </DivButtonPoke>
  
      </Header>


    <Main>
       {/* {isLoading && (
            <Lottie options={defaultOptions} height={100} width={100} />
          )}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && data && data.length >= 12 && listPokemon}
          {!isLoading && data && data.length === 0 && <p>Não há dados</p>} */}
 
          {ctx.pokemons !== undefined
          ? (
            listPokemon())
            :
            <p>Sem pokémons</p>}
          
    </Main>


      </DivContainer>
    </ChakraProvider>
  )
}

export default Home
