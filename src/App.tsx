import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
