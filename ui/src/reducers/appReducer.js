export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      return {
        ...state,
        photos: action.payload,
      };
    case "ADD_REGISTERS":
      return {
        ...state,
        registers: {
          ...state.registers,
          list: action.payload.list,
          count: action.payload.count,
        },
      };

    case "SET_FILTERS":
      return {
        ...state,
        registers: {
          ...state.registers,
          filters: {
            ...state.registers.filters,
            region: action.payload.region,
            province: action.payload.province,
            commune: action.payload.commune,
            location: action.payload.location,
            pfnm: action.payload.pfnm,
            species: action.payload.species,
            condition: action.payload.condition,
            format_comercial: action.payload.format_comercial,
            unit: action.payload.unit,
            price_1: action.payload.price_1,
            location_sale: action.payload.location_sale,
          },
        },
      };

    case "SET_PAGE":
      return {
        ...state,
        registers: {
          ...state.registers,
          page: action.payload,
        },
      };
    case "SET_FILTERS_SELECT":
      return {
        ...state,
        uniques_values_selects: action.payload,
      };

    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "UPDATE":
      return {
        ...state,
        isAuth: true,
        token: localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user")),
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
