import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />

      <ToastContainer />
    </AuthProvider>
  </>
);

export default App;
