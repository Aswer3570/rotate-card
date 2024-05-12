const block = document.getElementById('block')

block.addEventListener('mousemove', (e) => {
	let _x = block.offsetLeft + Math.floor(block.offsetWidth / 2)
	let _y = block.offsetTop + Math.floor(block.offsetHeight / 2)

	// Находим 0 в центре div блока
	x = e.clientX - _x
  y = (e.clientY - _y) * -1

  x = (x / block.offsetWidth / 2).toFixed(2)
  y = (y / block.offsetHeight / 2).toFixed(2)

  // Изменияем позицию стиля transform
	block.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`

	// Удаляем transform после того как мышка покинула div
  block.addEventListener('mouseout', (e) => { block.style = "" })
}, {
  capture: false
})


