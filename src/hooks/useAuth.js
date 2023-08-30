import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
    return {
      isLoggedIn: useSelector(selectIsLoggedIn),
      isRefreshing: useSelector(selectIsRefreshing),
      user: useSelector(selectUser),
      error: useSelector(selectError),
    };
}