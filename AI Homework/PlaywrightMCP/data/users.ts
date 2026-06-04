type LoginUser =
  | {
      username: string;
      password: string;
      shouldLogin: true;
    }
  | {
      username: string;
      password: string;
      shouldLogin: false;
      errorMessage: string;
    };

export const loginUsers: LoginUser[] = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    shouldLogin: true
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    shouldLogin: false,
    errorMessage: 'Epic sadface: Sorry, this user has been locked out.'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
    shouldLogin: true
  },
  {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    shouldLogin: true
  },
  {
    username: 'error_user',
    password: 'secret_sauce',
    shouldLogin: true
  },
  {
    username: 'visual_user',
    password: 'secret_sauce',
    shouldLogin: true
  }
];
