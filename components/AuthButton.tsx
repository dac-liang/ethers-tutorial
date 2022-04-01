import * as React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface AuthButtonProps extends ButtonProps {}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default AuthButton;
