const streakCountEl = document.getElementById('streakCount');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Get saved streak or start at 0
let currentStreak = localStorage.getItem('streak') || 5;
streakCountEl.textContent = currentStreak;

incrementBtn.addEventListener('click', () => {
  currentStreak++;
  localStorage.setItem('streak', currentStreak);
  streakCountEl.textContent = currentStreak;
});

resetBtn.addEventListener('click', () => {
  currentStreak = 0;
  localStorage.setItem('streak', currentStreak);
  streakCountEl.textContent = currentStreak;
});
