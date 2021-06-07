import instance from '../instance';

export const getNote = () => {
  return instance({
    url: '/note',
    method: 'GET',
  });
}

export const addNote = (data) => {
  return instance({
    url: '/note',
    method: 'POST',
    data,
  });
}