fetch('/api/expenses', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourToken}` // if using JWT
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error('Error:', error);
  });
  