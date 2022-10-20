const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredient = document.querySelector('#recipe-ingredient').value.trim();
    const description = document.querySelector('#recipe-desc').value.trim();
  
    if (name && ingredient && description) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, ingredient, description }),
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
        document.location.replace('/userprofile');
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
  