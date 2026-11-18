/*
 * PLACEHOLDER: these only simulate a network call so the forms have loading and
 * success states. Replace each body with a real request, e.g.
 *   const res = await fetch("/api/login", { method: "POST", headers: {...}, body: JSON.stringify(data) });
 *   if (!res.ok) throw new Error((await res.json()).message);
 * Throwing an Error shows its message on the form.
 */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function login({ email }) {
  await wait(600);
  console.info("login (placeholder)", { email });
  return { ok: true };
}

export async function register({ password, confirmPassword, ...profile }) {
  await wait(600);
  console.info("register (placeholder)", profile);
  return { ok: true };
}
