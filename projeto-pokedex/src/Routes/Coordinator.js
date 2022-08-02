export const goToPage = (Navigate, page) => {
    Navigate(`/${page}`);
  };

export const goToPageDetail = (Navigate,  pokemonName) => {
    Navigate(`/details/${pokemonName}`);
  };