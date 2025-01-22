document.addEventListener('DOMContentLoaded', () => {
  const dateDisplay = document.getElementById('date-display');

  // رابط API للتاريخ
  const apiUrl = 'https://worldtimeapi.org/api/ip';

  // جلب التاريخ من الـ API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // عرض التاريخ
      const dateTime = data.datetime;
      dateDisplay.textContent = `Current Date: ${new Date(dateTime).toLocaleString()}`;
    })
    .catch(error => {
      console.error('Error fetching date:', error);
      dateDisplay.textContent = 'Failed to load date.';
    });
});
