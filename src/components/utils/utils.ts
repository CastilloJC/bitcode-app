export function timeAgo(date: string) {
  const currentDate = new Date();
  const timestamp = Date.parse(date);
  const elapsed = currentDate.getTime() - timestamp;

  const seconds = Math.round(elapsed / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (seconds < 60) {
    return seconds + ' seconds ago';
  } else if (minutes < 60) {
    return minutes + ' minutes ago';
  } else if (hours < 24) {
    return hours + ' hours ago';
  } else {
    return days + ' days ago';
  }
}
