import api from './api';

const sendLogin = async (email, password) => {
  try {
    const { data } = await api.post('/user', { email, password });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default sendLogin;