
import React from 'react';
import Profile from './profile/page';


export default function User() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <main className="flex-1">
          {/* <PhotoCard /> */}
          <Profile />
        </main>
      </div>
    </div>
  );
}
