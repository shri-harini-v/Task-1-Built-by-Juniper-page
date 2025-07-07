// test
$(document).ready(function () {
  console.log('JS is connected');



  // section-grid
$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    // For each column
    $(".grid-column").each(function () {
      let speed = parseFloat($(this).data("speed")) || 0.3;

      $(this)
        .find("img")
        .each(function () {
          let currentY = $(this).data("ty") || 0;
          let newY = currentY - delta * speed;

          newY = Math.max(-300, Math.min(300, newY));

          $(this)
            .css("transform", `translateY(${newY}px)`)
            .data("ty", newY);
        });
    });

    lastScrollTop = scrollTop;
  });
});



  // Feature card animation
  $('.feature-card').each(function (index) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).css('transition-delay', index * 100 + 'ms').addClass('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this);
  });

  // Scroll reveal items
  $('.scroll-reveal').each(function () {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
        } else {
          $(entry.target).removeClass('visible');
        }
      });
    }, { threshold: 0.15 });

    observer.observe(this);
  });

  // Project card animation
  $('.project-card').each(function () {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
        } else {
          $(entry.target).removeClass('visible');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this);
  });

  // Testimonials navigation
  $(document).ready(function () {
    const $track = $('.testimonial-track');
    const $testimonials = $('.testimonial');
    const total = $testimonials.length;
    const $dotsContainer = $('.dots');

    let index = 0;

    // Dynamically create dots
    for (let i = 0; i < total; i++) {
      $dotsContainer.append('<div class="dot" data-index="' + i + '"></div>');
    }

    const $dots = $('.dot');

    function updateSlide() {
      const offset = index * ($testimonials.outerWidth(true));
      $track.css('transform', 'translateX(-' + offset + 'px)');
      $dots.removeClass('active');
      $dots.eq(index).addClass('active');
    }

    $('#prev').click(function () {
      if (index > 0) {
        index--;
        updateSlide();
      }
    });

    $('#next').click(function () {
      if (index < total - 1) {
        index++;
        updateSlide();
      }
    });

    $dots.click(function () {
      index = $(this).data('index');
      updateSlide();
    });

    // Initialize
    updateSlide();
  });

  // FAQ toggle
 $(document).ready(function () {
    $('.faq-question').click(function () {
      const $item = $(this).closest('.faq-item');
      const $answer = $item.find('.faq-answer');
      const isActive = $item.hasClass('active');

      // Close all other answers
      $('.faq-item').not($item).each(function () {
        const $other = $(this);
        const $otherAnswer = $other.find('.faq-answer');

        $other.removeClass('active');
        $other.find('.icon').text('+');

        // Smooth close
        $otherAnswer.css('height', $otherAnswer[0].scrollHeight + 'px');
        requestAnimationFrame(() => {
          $otherAnswer.css('height', '0');
        });
      });

      if (!isActive) {
        $item.addClass('active');
        $item.find('.icon').text('-');

        // Force initial height = 0 (before transition)
        $answer.css('height', '0');

        // Allow transition to full height
        requestAnimationFrame(() => {
          const fullHeight = $answer[0].scrollHeight;
          $answer.css('height', fullHeight + 'px');
        });

        // After animation ends, remove height so content adjusts naturally
        $answer.one('transitionend', () => {
          if ($item.hasClass('active')) {
            $answer.css('height', 'auto');
          }
        });

      } else {
        $item.removeClass('active');
        $item.find('.icon').text('+');

        // Set current height before collapsing
        $answer.css('height', $answer[0].scrollHeight + 'px');

        requestAnimationFrame(() => {
          $answer.css('height', '0');
        });
      }
    });
  });
  });


