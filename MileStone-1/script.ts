const toggleButton = document.getElementById('Toggle-Button') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsList.style.display === 'none' || skillsList.style.display === '') {
    skillsList.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    skillsList.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});