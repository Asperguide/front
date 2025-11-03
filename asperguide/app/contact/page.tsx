'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="p-5">

      {/* Page Contact */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contactez-nous</h2>
          <p className="text-center mb-5">
            Vous avez une question ou souhaitez en savoir plus sur nos offres ? Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Votre email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={5} placeholder="Votre message" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
