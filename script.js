const timezones = [
  { label: 'UTC', value: 'UTC' },
  { label: 'New York', value: 'America/New_York' },
  { label: 'Los Angeles', value: 'America/Los_Angeles' },
  { label: 'London', value: 'Europe/London' },
  { label: 'Berlin', value: 'Europe/Berlin' },
  { label: 'Dubai', value: 'Asia/Dubai' },
  { label: 'Tokyo', value: 'Asia/Tokyo' },
  { label: 'Singapore', value: 'Asia/Singapore' },
  { label: 'Sydney', value: 'Australia/Sydney' }
];

const clockGrid = document.getElementById('clock-grid');

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date);
}

function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function renderClocks() {
  const now = new Date();

  clockGrid.innerHTML = timezones
    .map(({ label, value }) => {
      const time = formatTime(now, value);
      const date = formatDate(now, value);
      return `
        <article class="clock-card">
          <h2 class="city">${label}</h2>
          <p class="time">${time}</p>
          <p class="date">${date}</p>
          <p class="timezone">${value}</p>
        </article>
      `;
    })
    .join('');
}

renderClocks();
setInterval(renderClocks, 1000);
