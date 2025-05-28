function addCompliment() {
  const input = document.getElementById('complimentInput');
  const list = document.getElementById('complimentList');
  const compliment = input.value.trim();

  if (compliment) {
    const li = document.createElement('li');
    li.textContent = compliment;
    list.appendChild(li);
    input.value = '';
  }
}
