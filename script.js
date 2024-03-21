const animation = document.querySelectorAll('.animate__animated')
const arrOfAnimations = ['animate__fadeInLeft', 'animate__fadeInRight']
const randomAnimation = array => array[Math.floor(Math.random() * array.length)]
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(randomAnimation(arrOfAnimations))
      observer.unobserve(entry.target)
    }
  })
})
animation.forEach(el => {
  observer.observe(el)
})
