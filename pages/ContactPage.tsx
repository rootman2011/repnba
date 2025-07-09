
import React from 'react';

const ContactPage: React.FC = () => {
    const email = 'minecraftrektfest@gmail.com';

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ minHeight: 'calc(100vh - 200px)' }}>
            <div className="max-w-3xl mx-auto text-center flex flex-col justify-center h-full">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white">Contacto</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Para cualquier consulta, sugerencia o primicia, no dudes en escribirnos.
                    </p>

                    <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Nuestro Correo Electrónico</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Puedes contactarnos directamente en la siguiente dirección:
                        </p>
                        <a 
                            href={`mailto:${email}`}
                            className="mt-4 inline-block text-xl font-semibold text-orange-600 dark:text-orange-400 hover:underline break-all"
                            aria-label={`Enviar un correo a ${email}`}
                        >
                            {email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
