export const registration_user = (registration, mass, per) => ({
  type: "REGISTRATION_USER",
  registration,
  mass,
  per,
  // email
});
export const login_user = (login) => ({
  type: "LOGIN_USER",
  login,
});
