import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useSelector } from 'react-redux';

export const Device = ({ device, index}) => {
  const { deleteDevice } = useContext(GlobalContext);
  const user = useSelector(state => state.authentication.user);
  const usageHour = device.activeSeconds / 3600;
  const rate = 21.97; // cents/kWh
  const cost = (usageHour*device.power / 1000) * rate / 100;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{device.deviceName}</td>
      <td>{device.power}</td>
      <td>{Math.round((usageHour + Number.EPSILON) * 100) / 100} hr</td>
      <td>${Math.round((cost + Number.EPSILON) * 100) / 100}</td>
      <td><button onClick={() => console.log(`clicked delete ${device.deviceName}`)} className="delete-btn">x</button></td>
    </tr>
    
  )
}
