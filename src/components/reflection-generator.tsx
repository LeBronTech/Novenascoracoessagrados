'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { WandSparkles, Loader2 } from 'lucide-react';
import { generateReflectionAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface ReflectionGeneratorProps {
  prayerText: string;
}

export default function ReflectionGenerator({ prayerText }: ReflectionGeneratorProps) {
  const [reflection, setReflection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setReflection(null);
    const result = await generateReflectionAction(prayerText);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: result.error,
      });
    } else if (result.reflection) {
      setReflection(result.reflection);
    }
  };

  return (
    <div className="w-full">
      <Button onClick={handleGenerate} disabled={isLoading} className="w-full sm:w-auto">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <WandSparkles className="mr-2 h-4 w-4" />
        )}
        Gerar Reflexão
      </Button>

      {isLoading && (
         <div className="mt-4 p-4 border border-dashed rounded-lg flex items-center gap-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>A sabedoria divina está a caminho...</p>
         </div>
      )}

      {reflection && (
        <Card className="mt-4 bg-accent/10 border-accent/20">
          <CardContent className="p-4">
            <p className="text-sm font-body italic text-foreground/80">{reflection}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
