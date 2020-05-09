import React from 'react';
import { Header } from './Header';
import { DeviceList } from './Devices/DeviceList';

import { GlobalProvider } from '../context/GlobalState';

import '../App.css';

export const DevicePage = () => (
    <GlobalProvider>
        <Header />
            <div className="container">
                <DeviceList />
            </div>
    </GlobalProvider>
)
