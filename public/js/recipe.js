const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document.querySelector('#recipe-ingredient').value.trim();
  const body = document.querySelector('#recipe-body').value.trim();

  if (name && ingredients && body) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name, ingredients, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/recipes');
      alert('Added a recipe');
    } else {
      alert('Failed to create recipe');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipes/${id}`, {
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
