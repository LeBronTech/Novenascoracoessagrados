
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfessionTimesModalProps {
  children: React.ReactNode;
}

export function ConfessionTimesModal({ children }: ConfessionTimesModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Horários de Confissão em Brasília</DialogTitle>
          <DialogDescription>
            Aqui você encontrará informações sobre os horários de confissão em diversas paróquias de Brasília.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>
            **Paróquia Nossa Senhora de Fátima (Asa Sul):**
            <br />
            Segunda a Sexta: 10h-12h e 15h-17h
            <br />
            Sábado: 9h-12h
          </p>
          <p className="mt-2">
            **Catedral Metropolitana Nossa Senhora Aparecida:**
            <br />
            Terça a Sexta: 14h-17h
          </p>
          <p className="mt-2">
            **Paróquia Santuário Dom Bosco:**
            <br />
            Quarta e Sexta: 15h-17h
            <br />
            Sábado: 9h-11h
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            *Estes são horários sugeridos. Recomenda-se confirmar diretamente com a paróquia antes de se dirigir ao local.*
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
