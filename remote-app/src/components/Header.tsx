import React from "react";

interface HeaderProps {
  userData?: { user: string; count: number };
}

const Header: React.FC<HeaderProps> = ({ userData }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">Remote App Header</h1>
      <p className="text-white">Hi, {userData?.user || 'User'}</p>
      <p className="text-white">Total clicks: {userData?.count || 0}</p>
    </header>
  );
};

export default Header;
