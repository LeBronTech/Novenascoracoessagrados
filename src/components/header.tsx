import Logo from './logo';

export default function Header() {
  return (
    <header className="py-6 px-4 text-center border-b border-black/5 dark:border-white/5 shadow-sm bg-card">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <Logo className="h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-wider text-primary">
          Corações Sagrados
        </h1>
        <p className="text-sm text-muted-foreground font-body">
          Seu portal de Novenas Católicas
        </p>
      </div>
    </header>
  );
}
