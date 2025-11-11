'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="p-5">

      {/* Page Contact */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Contactez-nous</h2>
          <p className="text-center text-gray-700 mb-8">
            Vous avez une question ou souhaitez en savoir plus sur nos offres ? Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>

          <form className="space-y-6" aria-label="Formulaire de contact">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                aria-label="Nom"
                aria-required="true"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                aria-label="Email"
                aria-required="true"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message"
                aria-label="Message"
                aria-required="true"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                aria-label="Envoyer le message"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
