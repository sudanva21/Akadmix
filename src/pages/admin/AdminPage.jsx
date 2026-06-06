import React from 'react';
import { AdminProvider, useAdmin } from '../../context/AdminContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminGate = () => {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

const AdminPage = () => {
  return (
    <AdminProvider>
      <AdminGate />
    </AdminProvider>
  );
};

export default AdminPage;
