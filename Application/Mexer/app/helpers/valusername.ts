export default function validateUsername(username: string) {
  // Minimum one character, only lower, upper text and numbers
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(username);
}
