export const formatTime = (time) => {
  if (!time || typeof time !== 'number' || time < 0) {
    return null;
  }
  const formanNumber = (calc) => String(Math.floor(calc)).padStart(2, '0');

  const seconds = formanNumber(time % 60);
  const minutes = formanNumber((time / 60) % 60);
  const hours = formanNumber(time / 3600);
  return `${hours}:${minutes}:${seconds}`;
};
