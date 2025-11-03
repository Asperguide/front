import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'AsperGuide',
  description: 'Plateforme pour accompagner les enfants et parents concernés par le syndrome d’Asperger.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
