export const signUp = (email: string, password: string, licensePlate: string) => ({
    type: 'SIGN_UP',
    payload: { email, password, licensePlate },
  });
  