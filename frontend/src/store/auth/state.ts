const storedUser = localStorage.getItem('user');

export interface UserInterface {
  username: string;
  firstName: string;
  email: string;
  id: number;
}

export interface AuthInterface {
  loggedIn: boolean;
  user: UserInterface | null;
}

function state(): AuthInterface {
  return {
    loggedIn: !!storedUser,
    user: storedUser ? JSON.parse(storedUser) as UserInterface : null,
  };
}

export default state;
