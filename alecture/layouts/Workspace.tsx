import React, { FC, useCallback } from 'react';

import { Redirect } from 'react-router';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback((e) => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </>
  );
};
export default Workspace;
