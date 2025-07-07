
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
  });


  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  });


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Re-trigger when scrolled back
      }
    });
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
  });


  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  });


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Re-trigger when scrolled back
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // repeat on scroll
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
});

  }, {
    threshold: 0.1
  });

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // repeat on scroll
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Re-trigger when scrolling back
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

const wrapper = document.getElementById('testimonial-wrapper');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    const total = wrapper.children.length;
    let index = 0;

    function updateSlide() {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateSlide();
      }
    });

    next.addEventListener('click', () => {
      if (index < total - 1) {
        index++;
        updateSlide();
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});


document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
    faq.querySelector('.faq-question').addEventListener('click', () => {
      const isActive = faq.classList.contains('active');

      // Close all
      faqs.forEach(f => {
        f.classList.remove('active');
        f.querySelector('.toggle-btn').textContent = '+';
      });

      // Open clicked
      if (!isActive) {
        faq.classList.add('active');
        faq.querySelector('.toggle-btn').textContent = '–';
      }
    });
  });
});
