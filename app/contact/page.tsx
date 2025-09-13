import React from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen px-8 pt-12 max-w-3xl mx-auto">
            <h1 className="text-white text-2xl font-bold mb-1">
                    Me contactez ?
            </h1>
            <p className="[max-width:60ch]">Si vous souhaitez me contacter pour quelque raison que ce soit (collaboration, recrutement, question…), remplissez le formulaire ci-dessous ou écrivez-moi directement à : <a href="mailto:gabriel@email.dev" className="font-bold">gabriel@email.dev</a></p>

            <div className="max-w-xl p-3 bg-white border-gray-200 rounded-lg mt-7 shadow-sm dark:bg-[#18181b]">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-lg font-semibold mb-2">Formulaire d’envoie de mail</h1>
                </div>

                <div className="flex items-stretch space-x-18 mb-7">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <p className="text-gray-300 text-sm mb-2">Votre prénom*</p>
                        <div
                        className="flex h-[34px] text-[14px] text-white/60 w-[240px] items-center bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                        >
                        <input
                            required
                            className="bg-transparent text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
                            pattern="^[0-9,]*$"
                            id="currency-input"
                            name="text"
                            type="text"
                            placeholder="John Doe"
                        />
                        </div>
                    </div>
                    
                    <div className="w-full max-w-sm min-w-[200px]">
                        <p className="text-gray-300 text-sm mb-2">Votre adresse e-mail*</p>
                        <div
                        className="flex h-[34px] text-[14px] text-white/60 w-[240px] items-center bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                        >
                        <input
                            required
                            className="bg-transparent text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
                            pattern="^[0-9,]*$"
                            id="currency-input"
                            name="text"
                            type="text"
                            placeholder="john-doe@example.com"
                        />
                        </div>
                    </div>
                </div>
                
                <div className="w-full max-w-xl min-w-[300px] mb-6">
                    <p className="text-gray-300 text-sm mb-2">Que voulez-vous envoyer comme message ?*</p>
                    <div
                        className="flex text-[16px] text-white/60 w-full bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                    >
                        <textarea
                            required
                            className="bg-transparent text-[#f4f4f5] px-4 py-3 rounded-lg focus:outline-none w-full resize-none min-h-[120px]"
                            id="message-input"
                            name="message"
                            placeholder="Écrivez votre message ici..."
                        />
                    </div>
                </div>

                <footer className="font-medium text-zinc-200 text-xs leading-relaxed [max-width:70ch] mb-2">
                    En cas de problème contactez moi manuellement via mon adresse e-mail !
                </footer>
            </div>
        </div>
    )
}
