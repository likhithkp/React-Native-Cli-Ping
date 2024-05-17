import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {AuthenticatedUserProvider} from './src/navigation/RootNavigation';

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigation />
    </AuthenticatedUserProvider>
  );
}
