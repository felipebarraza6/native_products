import { POST_LOGIN, GET } from "./config";

export const login = async (data) => {
  const response = await POST_LOGIN("auth/users/login/", data);
  return response;
};

export const get_profile = async (user) => {
  const response = await GET(`auth/users/${user}/`);
  return response.data;
};

export const users_list = async (page) => {
  const response = await GET(`auth/users/?page=${page}`);
  return response.data;
};

export const list_registers = async (page, filters) => {
  const filterParams = Object.entries(filters)
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => `${key}__icontains=${value}`)
    .join("&");

  const url = `registers/?page=${page}${
    filterParams ? `&${filterParams}` : ""
  }`;

  const response = await GET(url);
  return response.data;
};

export const list_images_gallery = async (page) => {
  const response = await GET(`image-gallery/?page=${page}`);

  return response.data;
};

export const list_uniques_values = async () => {
  const response = await GET("registers/unique_values/");
  return response.data;
};

const api = {
  authenticated: { login: login, get_profile: get_profile },
  users: {
    list: users_list,
  },
  registers: {
    list: list_registers,
    uniques_values: list_uniques_values,
  },
  images_gallery: {
    list: list_images_gallery,
  },
};

export default api;
