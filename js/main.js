// Menú Responsive
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Validación del formulario de comentarios
const commentForm = document.querySelector('.comments-section form');

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = commentForm.querySelector('textarea');
    const commentText = textarea.value.trim();

    if (commentText !== '') {
      const commentsList = document.querySelector('.comments-list');
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `<p><strong>Tú:</strong> ${commentText}</p>`;
      commentsList.prepend(newComment);
      textarea.value = '';
    }
  });
}
