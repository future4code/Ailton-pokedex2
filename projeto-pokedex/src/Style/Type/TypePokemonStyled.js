import styled from "styled-components";

// export const DivTypes = styled.div`

// display: flex;
// column-gap: 4px;
// `

export const PokemonsTypes = styled.div`
display: flex;
  margin: 10px;
  background-color: ${(props) => props.color};
  width: 75px;
  height: 31px;
  border-radius: 8px;
  color: white;
  border: 1px dashed rgba(255, 255, 255, 0.47);
`;

// export const colorType = {
//     grass: "#76A866",
//     flying: "#b2babd",
//     water: "#71C3FF;",
//     poison: "#b97fc9",
//     fire: "#fd7d24",
//     bug: "#316520",
//     normal: "#8A8A8A",
//     ground: "#BF9762",
//     fairy:"#CE4069",
//     electric:"#F4D23B",
//     fighting: "#CE4069",
//     psychic:"#F67176",
//     rock:"#C7B78B",
//     ghost:"#5269AC",
//     dragon:"#0A6CBF",
//     dark: "#5C5365 ",
//     steel:"#BBBBBB",
//     ice: "#74CEC0 ",
//   };
