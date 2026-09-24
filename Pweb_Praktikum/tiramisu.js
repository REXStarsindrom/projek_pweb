document.addEventListener('DOMContentLoaded', function () {
  const themeBtn = document.getElementById('themeToggle');

if (themeBtn) {themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {themeBtn.textContent = '🌙 Mode Gelap';} else {
  themeBtn.textContent = '☀️ Mode Terang';}});
  }});

$(window).on('scroll load', function () {$('.reveal').each(function () {
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var elementTop = $(this).offset().top;
  var elementHeight = $(this).outerHeight();

  if (scrollTop + windowHeight > elementTop + 100 && scrollTop < elementTop + elementHeight - 50) {$(this).addClass('active');
  } else {$(this).removeClass('active');}
  });
});