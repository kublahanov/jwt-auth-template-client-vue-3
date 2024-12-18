import api from '../plugins/axios';

export async function checkServerStatus() {
  try {
    const response = await api.get('/');
    console.debug('Сервер доступен.');
    return response.status === 200;
  } catch (error) {
    // console.error('Сервер недоступен:', error);
    console.error('Сервер недоступен.');
    return false;
  }
}
