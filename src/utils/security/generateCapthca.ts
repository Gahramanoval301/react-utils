// generate captcha
export function generateCaptcha(length = 6) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    captcha += charset[randomIndex];
  }

  return captcha;
}