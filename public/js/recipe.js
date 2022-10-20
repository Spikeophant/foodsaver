const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    // const ingredients = document.querySelector('#recipe-ingredient').value.trim();
    const body = document.querySelector('#recipe-desc').value.trim();
  
    if (name && ingredient && description) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, body}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create recipe');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/recipe/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/recipes');
        alert('Added recipe');
      } else {
        alert('Failed to delete recipe');
      }
    }
  };
  
  document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);
  