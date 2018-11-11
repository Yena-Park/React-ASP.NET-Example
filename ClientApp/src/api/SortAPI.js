import axios from 'axios';

const BASE_URL = 'https://localhost:5001';

const fetchSort = (sortType, valueType, inputValue, completion) => {
  axios.post(`${BASE_URL}/api/Sort`, {
      SortType: sortType,
      InputTypeValue: valueType,
      InputValue: inputValue
  })
  .then(response => {
    completion(response.data)
  })
  .catch(err => completion({error: err}))
}

export default {
  fetchSort
};