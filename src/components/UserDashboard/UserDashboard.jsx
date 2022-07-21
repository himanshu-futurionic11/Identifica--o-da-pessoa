import React from 'react';
import Useridentify from '../UserIdentify/Useridentify';

const UserDashboard = () => {
    return (
        <div>

<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
   {/*  <!-- Page content here --> */}
    <label for="my-drawer-4" class="drawer-button btn btn-primary">Pesquisa Pessoa</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-3/5 bg-base-100 text-base-content">
     <Useridentify/>
     
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default UserDashboard;