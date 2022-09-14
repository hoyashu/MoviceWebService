import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layouta({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layouta;
