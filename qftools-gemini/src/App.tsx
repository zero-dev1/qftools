import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { Accounts } from './pages/Accounts';
import { Tokens } from './pages/Tokens';
import { Gas } from './pages/Gas';
import { Burn } from './pages/Burn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/explorer" replace />} />
          <Route path="explorer" element={<Home />} />
          <Route path="explorer/accounts" element={<Accounts />} />
          <Route path="explorer/:id" element={<Account />} />
          <Route path="tokens" element={<Tokens />} />
          <Route path="gas" element={<Gas />} />
          <Route path="burn" element={<Burn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
