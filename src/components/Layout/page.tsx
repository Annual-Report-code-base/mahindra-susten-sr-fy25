'use client';

import Header from '../Header/page';
import Footer from '../Footer/page';
import Header2 from '../Header2/page';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header2 />

      {/* Main content grows to fill available space */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
