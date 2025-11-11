import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2">&copy; 2025 AsperGuide. Tous droits réservés.</p>

        <p className="space-x-4">
          <Link
            href="/politique"
            className="text-gray-300 hover:text-white transition"
          >
            Politique de confidentialité
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}