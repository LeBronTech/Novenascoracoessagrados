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
          <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
            <defs>
              <radialGradient id="instagram-gradient" cx="0.35" cy="0.95" r="1.5">
                <stop offset="0" stopColor="#FFD974" />
                <stop offset="0.45" stopColor="#F58529" />
                <stop offset="0.6" stopColor="#D92E7F" />
                <stop offset="0.9" stopColor="#9B36B7" />
              </radialGradient>
            </defs>
            <path fill="url(#instagram-gradient)" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z" />
            <path fill="#fff" d="M16 7.6c-4.632 0-5.18.018-7.002.102-1.803.083-3.04.358-4.11.74-1.095.39-2.006 1.005-2.924 1.924s-1.355.829-1.355 2.924c-.083 1.803-.102 2.37-.102 7.002s.018 5.18.102 7.002c.083 1.803.358 3.04.74 4.11.39 1.095 1.005 2.006 1.924 2.924s1.829.954 2.924 1.336c1.07.382 2.307.657 4.11.74 1.822.084 2.37.102 7.002.102s5.18-.018 7.002-.102c1.803-.083 3.04-.358 4.11-.74 1.095-.39 2.006-1.005 2.924-1.924s.954-1.829 1.336-2.924c.382-1.07.657-2.307.74-4.11.084-1.822.102-2.37.102-7.002s-.018-5.18-.102-7.002c-.083-1.803-.358-3.04-.74-4.11-.39-1.095-1.005-2.006-1.924-2.924s-1.829-.954-2.924-1.336c-1.07-.382-2.307-.657-4.11-.74C21.18 7.618 20.632 7.6 16 7.6zm0 2.16c4.545 0 5.065.016 6.84.098 1.66.077 2.623.35 3.32.615.84.316 1.48.72 2.126 1.365.645.645 1.05 1.285 1.364 2.126.266.697.538 1.66.616 3.32.082 1.775.098 2.295.098 6.84s-.016 5.065-.098 6.84c-.078 1.66-.35 2.623-.616 3.32-.316.84-.72 1.48-1.365 2.126-.645.645-1.285 1.05-2.126 1.364-.697.266-1.66.538-3.32.616-1.775.082-2.295.098-6.84.098s-5.065-.016-6.84-.098c-1.66-.078-2.623-.35-3.32-.616-.84-.316-1.48-.72-2.126-1.365-.645-.645-1.05-1.285-1.364-2.126-.266-.697-.538-1.66-.616-3.32-.082-1.775-.098-2.295-.098-6.84s.016-5.065.098-6.84c.078-1.66.35-2.623.616-3.32.316.84.72 1.48 1.365-2.126.645.645 1.285-1.05 2.126-1.364.697-.266 1.66-.538 3.32-.616 1.775-.082 2.295-.098 6.84-.098zM16 11.5c-6.34 0-11.465 5.126-11.465 11.465S9.66 34.43 16 34.43s11.465-5.126 11.465-11.465S22.34 11.5 16 11.5zm0 19.383c-4.373 0-7.918-3.545-7.918-7.918s3.545-7.918 7.918-7.918 7.918 3.545 7.918 7.918-3.545 7.918-7.918 7.918zM26.47 7.84c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://chat.whatsapp.com/La88Os582PHKICHfuxFE09" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Entre no nosso grupo do WhatsApp">
           <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
              <path fill="#40C351" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>
              <path fill="#FFFFFF" d="M22.25,9.64a12.6,12.6,0,0,0-17.61,0,12.53,12.53,0,0,0-1.2,18.91l-1.33,4.8,4.92-1.31a12.51,12.51,0,0,0,19.29-1.2A12.53,12.53,0,0,0,22.25,9.64ZM16,29.1a10.42,10.42,0,0,1-5.29-1.48L5.09,29.5l1.9-5.46A10.51,10.51,0,1,1,16,29.1ZM21,17.58c-.37-.19-2.18-1.07-2.52-1.2s-.58-.19-.83.19-.95,1.2-1.17,1.45-.44.28-.81.09-1.58-.58-3-1.85A11.63,11.63,0,0,1,9.88,13.6c-.23-.39-.02-.6,0.17-0.79s.39-.48.58-.72.26-.39.39-.65.06-.52-.03-.72-.83-2-1.14-2.73-.61-.63-.83-.64a1.6,1.6,0,0,0-1.17.55,4.8,4.8,0,0,0-1.58,3.75,8,8,0,0,0,1.72,4.8,15.68,15.68,0,0,0,6.79,6,15.4,15.4,0,0,0,2.37.89,5.77,5.77,0,0,0,2.68.17,4.4,4.4,0,0,0,2.92-2.06c.28-.52.28-1,.23-1.14S21.4,18,21,17.58Z"/>
          </svg>
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
