import React from 'react'
import Employee from './Employee';
import Home from './Home';
import AdminLayout from '../../components/AdminLayout';
import { Switch, Route } from 'react-router-dom';

const Admin = () => {
    return (
        <AdminLayout>
            <Switch>
                <Route path="/admin" exact component={Home} />
                <Route path="/admin/employees" component={Employee} />
            </Switch>
        </AdminLayout>
    );
};

export default Admin;