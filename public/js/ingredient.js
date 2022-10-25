const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#ingredient-name').value.trim();

  if (name) {
    const response = await fetch(`/api/ingredients`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
      alert('Added ingredient');
    } else {
      alert('Failed to add ingredient');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/ingredients/ingredient/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/ingredients');
    } else {
      alert('Failed to delete ingredient');
    }
  }
};

document
  .querySelector('.new-ingredient-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.ingredient-list')
  .addEventListener('click', delButtonHandler);
