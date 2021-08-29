import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { logout } from '../context/AuthContext';

export default function UserProfile({ user }) {
  const router = useRouter();

  function handleRoute(path) {
    router.push(`/${path}`);
  }

  function userSignedList() {
    return (
      <>
        <MenuItem onClick={() => { logout(); }}>Logout</MenuItem>
        <MenuItem>Wishlist</MenuItem>
      </>
    );
  }

  function userNotSignedList() {
    return (
      <>
        <MenuItem onClick={() => handleRoute('authentication')}>Sign In</MenuItem>
      </>
    );
  }
  return (
    <>
      <Menu>
        <MenuButton as={Link}>
          {user ? user.displayName : 'Sign IN'}
        </MenuButton>
        <MenuList color="black" maxWidth="6">
          {user ? userSignedList() : userNotSignedList()}
        </MenuList>
      </Menu>
    </>
  );
}
