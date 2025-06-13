document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.event-poster img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  showImage(currentIndex);

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  });
});