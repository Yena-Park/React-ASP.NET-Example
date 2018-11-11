import axios from 'axios';

const fetchSort = completion => {
  axios({
    method: 'get',
    url: 'https://localhost:5001/Sort/Sort2'
  })
    .then(response => 
      completion({
        steps: response.data.steps
      }))
    .catch(err => completion({error: err}))
}

export default {
  fetchSort
};