import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; 2025 AsperGuide. Tous droits réservés.</p>
        <p className="mb-0">
          <Link href="/politique" className="text-white me-3">
            Politique de confidentialité
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}
