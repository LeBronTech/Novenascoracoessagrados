import Image from 'next/image';
import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const footerLogo1 = PlaceHolderImages.find(img => img.id === 'footer-logo-1');
const footerLogo2 = PlaceHolderImages.find(img => img.id === 'footer-logo-2');

export default function Footer() {
  return (
    <footer className="bg-card border-t border-black/5 dark:border-white/5 mt-12 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4">
          {footerLogo1 && (
            <Image
              src={footerLogo1.imageUrl}
              alt={footerLogo1.description}
              width={60}
              height={60}
              className="rounded-full object-cover"
              data-ai-hint={footerLogo1.imageHint}
            />
          )}
          {footerLogo2 && (
            <Image
              src={footerLogo2.imageUrl}
              alt={footerLogo2.description}
              width={60}
              height={60}
              className="rounded-full object-cover"
              data-ai-hint={footerLogo2.imageHint}
            />
          )}
        </div>

        <div className="flex flex-col items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Corações Sagrados. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido por <Link href="#" className="font-semibold text-primary hover:underline">Seu Nome</Link></p>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4">
          <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
