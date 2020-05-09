import React, { useContext, useEffect } from 'react';
import { Device } from './Device';

import { GlobalContext } from '../../context/GlobalState';
import { useSelector } from 'react-redux';

export const DeviceList = () => {
  const { devices, getDevices } = useContext(GlobalContext);
  const user = useSelector(state => state.authentication.user);

  useEffect(() => {
    getDevices(user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Devices</h3>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Power</th>
            <th scope="col">Usage</th>
            <th scope="col">Estimated Cost</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {devices.map((device, index) => (<Device key={device._id} device={device} index={index}/>))}
      </tbody>
    </>
  )
}
