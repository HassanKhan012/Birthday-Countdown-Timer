function startCountdown() {
  const birthdayInput = document.getElementById('birthday').value;
  const birthday = new Date(birthdayInput);

  function updateCountdown() {
    const now = new Date();
    const difference = birthday - now;

    let message = "Happy Birthday";

    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      message = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    document.getElementById('countdown').textContent = message;
  }


  updateCountdown();

  setTimeout(() => {
    setInterval(updateCountdown, 1000);
  }, 1000);
}
