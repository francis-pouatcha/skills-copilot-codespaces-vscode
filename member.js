function skillsMember() {
  const member = document.querySelector('.member');
  const memberBtn = document.querySelector('.member__btn');
  const memberClose = document.querySelector('.member__close');

  memberBtn.addEventListener('click', () => {
    member.classList.add('active');
  });

  memberClose.addEventListener('click', () => {
    member.classList.remove('active');
  });
}