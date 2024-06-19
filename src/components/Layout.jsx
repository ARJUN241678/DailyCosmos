import React from 'react';
import SideBar from './SideBar';
import Main from './Main';

export default function Layout({ data }) {
  return (
    <div className="container">
      <SideBar data={data}/>
      <Main data={data}/>
    </div>
  );
}
