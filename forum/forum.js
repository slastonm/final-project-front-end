const postInput = document.getElementById('postInput');
const mediaInput = document.getElementById('mediaInput');
const postsContainer = document.getElementById('posts');
const sendButton = document.getElementById('sendButton');
const preview = document.getElementById('preview');

postInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    createPost();
  }
});

sendButton.addEventListener('click', createPost);

mediaInput.addEventListener('change', function() {
  preview.innerHTML = '';
  const file = mediaInput.files[0];
  if (!file) return;

  const fileType = file.type;
  const url = URL.createObjectURL(file);
  let element;

  if (fileType.startsWith('image/')) {
    element = document.createElement('img');
    element.src = url;
  } else if (fileType.startsWith('video/')) {
    element = document.createElement('video');
    element.src = url;
    element.controls = true;
  } else if (fileType.startsWith('audio/')) {
    element = document.createElement('audio');
    element.src = url;
    element.controls = true;
  }

  if (element) preview.appendChild(element);
});

function createPost() {
  const postText = postInput.value.trim();
  const file = mediaInput.files[0];

  if (!postText && !file) return;

  const postDiv = document.createElement('div');
  postDiv.className = 'post-container';

  if (postText) {
    const textPara = document.createElement('p');
    textPara.textContent = postText;
    postDiv.appendChild(textPara);
  }

  if (file) {
    const fileType = file.type;
    const url = URL.createObjectURL(file);
    let mediaElement;

    if (fileType.startsWith('image/')) {
      mediaElement = document.createElement('img');
      mediaElement.src = url;
    } else if (fileType.startsWith('video/')) {
      mediaElement = document.createElement('video');
      mediaElement.src = url;
      mediaElement.controls = true;
    } else if (fileType.startsWith('audio/')) {
      mediaElement = document.createElement('audio');
      mediaElement.src = url;
      mediaElement.controls = true;
    }

    if (mediaElement) postDiv.appendChild(mediaElement);
  }

  postsContainer.prepend(postDiv);
  postInput.value = '';
  mediaInput.value = '';
  preview.innerHTML = '';
}
