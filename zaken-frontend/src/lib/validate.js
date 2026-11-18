const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin({ email, password }) {
  const e = {};
  if (!EMAIL.test(email.trim())) e.email = "Enter a valid email address.";
  if (!password) e.password = "Enter your password.";
  return e;
}

export function validateRegister({ name, shopName, email, whatsapp, password, confirmPassword }) {
  const e = {};
  if (!name.trim()) e.name = "Enter your name.";
  if (!shopName.trim()) e.shopName = "Enter your shop name.";
  if (!EMAIL.test(email.trim())) e.email = "Enter a valid email address.";
  if (whatsapp.replace(/\D/g, "").length < 10) e.whatsapp = "Enter a valid WhatsApp number.";
  if (password.length < 8) e.password = "Use at least 8 characters.";
  if (confirmPassword !== password) e.confirmPassword = "Passwords don't match.";
  return e;
}
