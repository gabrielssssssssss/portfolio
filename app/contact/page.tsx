"use client"
import React, { useEffect, useState } from 'react';
import { FadeUp } from "../components/FadeUp";
import { AnimatedSubscribeButton } from "../components/Button";
import Mailer from './utils/Mailer';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [state, setState] = useState(false);

    useEffect(() => {
        if (state) {
            async function callback() {
                await Mailer({EmailTo: email, Message: content}).then((val) => {
                    console.log(val)
                })
            };
            callback();
        }
    }, [state])

    return (
        <div className="flex flex-col min-h-screen px-4 sm:px-8 pt-12 max-w-3xl mx-auto">
            <h1 className="text-white text-2xl font-bold mb-1">
                Me contactez ?
            </h1>
            <p className="max-w-[60ch]">
                Si vous souhaitez me contacter pour quelque raison que ce soit (collaboration, recrutement, question…), remplissez le formulaire ci-dessous ou écrivez-moi directement à :{" "}
                <a href="mailto:gabriel@email.dev" className="font-bold">
                    gabriel@email.dev
                </a>
            </p>

            <div className="w-full p-6 sm:p-8 bg-white border-gray-200 rounded-lg mt-7 shadow-sm dark:bg-[#18181b]">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-lg font-semibold mb-6">Formulaire d’envoi de mail</h1>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-7">
                    <div className="w-full">
                        <p className="text-gray-300 text-sm mb-2">Votre prénom*</p>
                        <div className="flex h-[44px] text-[14px] text-white/60 w-full items-center bg-[#09090b] border border-white/10 rounded-lg px-3">
                            <input
                                required
                                className="bg-transparent text-[#f4f4f5] focus:outline-none w-full"
                                type="text"
                                placeholder="John Doe"
                                onChange={(value) => setName(value.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <p className="text-gray-300 text-sm mb-2">Votre adresse e-mail*</p>
                        <div className="flex h-[44px] text-[14px] text-white/60 w-full items-center bg-[#09090b] border border-white/10 rounded-lg px-3">
                            <input
                                required
                                className="bg-transparent text-[#f4f4f5] focus:outline-none w-full"
                                type="email"
                                placeholder="john-doe@example.com"
                                onChange={(value) => setEmail(value.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full mb-6">
                    <p className="text-gray-300 text-sm mb-2">Que voulez-vous envoyer comme message ?*</p>
                    <div className="flex text-[16px] text-white/60 w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2">
                        <textarea
                            required
                            className="bg-transparent text-[#f4f4f5] focus:outline-none w-full resize-none min-h-[140px]"
                            placeholder="Écrivez votre message ici..."
                            onChange={(value) => setContent(value.target.value)}
                        />
                    </div>
                </div>

                <AnimatedSubscribeButton onClick={() => setState(true)} className="flex bg-[#09090b] text-white border border-white/10 hover:white/60 w-full justify-center py-3 rounded-lg">
                    <span>Envoyer</span>
                    <span>Mail envoyé avec succès!</span>
                </AnimatedSubscribeButton>
            </div>
        </div>
    )
}
