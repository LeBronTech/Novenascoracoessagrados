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
        <a href="https://www.instagram.com/coracoessagradosbsb?igsh=MXFvaWJtcW1kZHFtNg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Siga-nos no Instagram">
          <Image src="https://i.postimg.cc/4xX2zVKw/image.png" alt="Instagram" width={32} height={32} className="w-8 h-8" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://chat.whatsapp.com/La88Os582PHKICHfuxFE09" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Entre no nosso grupo do WhatsApp">
          <Image src="https://i.postimg.cc/QdgSCt01/image.png" alt="WhatsApp" width={36} height={36} className="w-9 h-9" />
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
