export function getUser() {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
}

export const getActiveUser = (nombre = "User") => ({
  uid: "ABC123",
  username: nombre,
});
