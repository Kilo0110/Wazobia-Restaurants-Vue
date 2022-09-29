import jwt_decode from "vue-jwt-decode";
import { useState } from "vue3-use-hooks";
import useFetchApi from "./useFetchApi";
import axios from "axios";
// import qs from "qs";

export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const login = async ({ email, password }) => {
    // eslint-disable-next-line no-async-promise-executor
    try {
      const loginDetails = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      setToken(loginDetails.access_token);
      setUser(loginDetails.user);

      return loginDetails;
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios("/api/auth/refresh");

        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi("/api/users/login");

        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) {
      return;
    }

    const jwt = jwt_decode(authToken.value);

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();
        await getUser();

        reRefreshAccessToken();

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  const logout = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        await useFetchApi("/api/auth/logout", {
          method: "POST",
        });

        setToken(null);
        setUser(null);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    login,
    useAuthUser,
    useAuthToken,
    initAuth,
    useAuthLoading,
    logout,
  };
};
