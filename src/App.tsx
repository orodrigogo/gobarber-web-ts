import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
