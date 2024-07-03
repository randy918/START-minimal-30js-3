
//_ ████████████████████████████████████  FUNCTIONS

function handleUpdate()  {
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


}

//_$ ████████████████████████████████████  QUERY SELECTORS

const inputs = document.querySelectorAll('.controls input');

//^ ████████████████████████████████████  EVENT LISTENERS

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//>  ████████████████████████████████████  REAL PROGRAM
