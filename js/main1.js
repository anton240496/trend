document.addEventListener('DOMContentLoaded', () => {
  function setupInfiniteScroll() {
    const containers = document.querySelectorAll('.results__scroll-container');
    containers.forEach(container => {
      const content = container.querySelector('.results__reviews');
      if (!content) return;


      const items = content.innerHTML;
      content.innerHTML = items + items;


      const pauseAnimation = () => {
        content.style.animationPlayState = 'paused';
      };

      const resumeAnimation = () => {
        content.style.animationPlayState = 'running';
      };

      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('touchstart', pauseAnimation, {
        passive: true
      });

      container.addEventListener('mouseleave', resumeAnimation);
      container.addEventListener('touchend', resumeAnimation, {
        passive: true
      });
      container.addEventListener('touchcancel', resumeAnimation, {
        passive: true
      });
    });
  }
  setupInfiniteScroll();
});