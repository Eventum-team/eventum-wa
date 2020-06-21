const ipApi = process.env.REACT_APP_API_IP;
const portApi = process.env.REACT_APP_API_PORT;

export const ipApiGetway = `http://${ipApi}:${portApi}/graphql`;
//export const ipLoadImages = 'http://190.24.19.228:5000/upload1';
export const ipLoadImages = `http://${ipApi}:${portApi}/upload1`;
