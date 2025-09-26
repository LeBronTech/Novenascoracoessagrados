import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center mt-8 text-stone-600">
      <div className="flex justify-center items-center gap-4 mb-4">
        <Image src="https://i.postimg.cc/NGx77nBh/3-20250926-040914-0001.png" alt="Corações Sagrados Logo 1" width={96} height={96} className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white" />
        <a href="https://lebrontech.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" title="Visitar Portfólio LeBronDev-Designe™">
          <Image src="https://i.postimg.cc/MHZBFWxC/4-20250926-040914-0002.png" alt="LeBronDev-Designe Logo" width={96} height={96} className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white transition-transform duration-200 hover:scale-105" />
        </a>
      </div>

      <div className="flex justify-center items-center gap-6 my-6">
        <a href="https://www.instagram.com/coracoessagradosbsb?igsh=MXFvaWJtcW1kZHFtNg==" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:opacity-80 transition-opacity duration-300" title="Siga-nos no Instagram">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.048 0-4.544.018-6.138.09-1.595.072-2.685.345-3.638.718a4.874 4.874 0 00-1.74 1.74c-.373.953-.647 2.043-.718 3.638C.018 7.77 0 8.266 0 12.315s.018 4.544.09 6.138c.072 1.595.345 2.685.718 3.638a4.874 4.874 0 001.74 1.74c.953.373 2.043.647 3.638.718 1.594.072 2.09.09 6.138.09s4.544-.018 6.138-.09c1.595-.072 2.685-.345 3.638-.718a4.874 4.874 0 001.74-1.74c.373-.953.647-2.043-.718-3.638.072-1.594.09-2.09.09-6.138s-.018-4.544-.09-6.138c-.072-1.595-.345-2.685-.718-3.638a4.874 4.874 0 00-1.74-1.74c-.953-.373-2.043-.647-3.638-.718C16.859 2.018 16.362 2 12.315 2zm0 1.802c4.004 0 4.475.016 6.06.088 1.487.067 2.37.332 3.01.57a3.072 3.072 0 011.14 1.14c.238.64.502 1.522.57 3.01.072 1.584.088 2.055.088 6.06s-.016 4.475-.088 6.06c-.067 1.487-.332 2.37-.57 3.01a3.072 3.072 0 01-1.14 1.14c-.64.238-1.522.502-3.01.57-1.584.072-2.055.088-6.06.088s-4.475-.016-6.06-.088c-1.487-.067-2.37-.332-3.01-.57a3.072 3.072 0 01-1.14-1.14c-.238-.64-.502-1.522-.57-3.01-.072-1.584-.088-2.055-.088-6.06s.016-4.475.088-6.06c.067-1.487.332-2.37.57-3.01a3.072 3.072 0 011.14-1.14c.64-.238 1.522-.502 3.01-.57C7.84 3.818 8.312 3.802 12.315 3.802zM12.315 7.37a5.185 5.185 0 100 10.37 5.185 5.185 0 000-10.37zm0 8.568a3.383 3.383 0 110-6.766 3.383 3.383 0 010 6.766zm6.18-8.94a1.21 1.21 0 100-2.42 1.21 1.21 0 000 2.42z" clipRule="evenodd" /></svg>
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://chat.whatsapp.com/La88Os582PHKICHfuxFE09" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity duration-300" title="Entre no nosso grupo do WhatsApp">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.95L2 22l5.25-1.42c1.41.79 3.02 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM17.23 15.25c-.22.62-1.33 1.14-1.62 1.18-.29.04-.62.06-1-.04-.38-.1-1.38-.51-2.63-1.53-1.65-1.34-2.7-2.97-2.82-3.13-.12-.16-.97-1.3-.97-2.5s.58-1.8.79-2.07c.21-.27.46-.34.62-.34.13 0 .28.01.41.03.13.02.3.04.46.3.16.26.58 1.4.63 1.51.05.11.08.24.03.38-.05.14-.08.21-.16.33-.08.12-.18.21-.26.3-.1.1-.19.2-.29.33-.1.13-.21.26-.09.5.12.24.58 1.03 1.25 1.64.85.75 1.58 1.02 1.8 1.09.22.07.35.06.48-.04.13-.1.54-.63.69-.83.15-.2.3-.31.48-.31.18 0 .9.44 1.05.52s.25.12.28.18c.03.06.03.35-.19.97z"/></svg>
          <span className="sr-only">WhatsApp</span>
        </a>
        <a href="https://lebrontech.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:opacity-80 transition-opacity duration-300" title="Veja nosso trabalho no GitHub">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
          <span className="sr-only">GitHub</span>
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Corações Sagrados. Todos os direitos reservados.</p>
      <p className="mt-2 text-sm">
        <a href="https://lebrontech.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
          Desenvolvido por: LeBronDev-Designe™
        </a>
      </p>
    </footer>
  );
}
