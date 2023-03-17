import '../style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/user';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

usersSelect.addEventListener('change', () => {
  clearPageData();
  const userID = document.querySelector('#users-select').value;
  let firstPostID;

  fetch(`https://dummyjson.com/posts/user/${userID}`)
    .then(res => res.json())
    .then(data =>{
      firstPostID = data.posts[0].id;
      fillPosts(data.posts)
      return firstPostID;
    }).then((id) => {
      fetch(`https://dummyjson.com/posts/${id}/comments`)
        .then((res) => res.json())
        .then((data) => fillFeaturedPostComments(data.comments))
    })
    .catch((error) => fillErrorMessage(error.message));
});

fetch(`${USERS_API}`)
  .then((res) => res.json())
  .then(res => {
    fillUsersSelect(res.users);
  });
