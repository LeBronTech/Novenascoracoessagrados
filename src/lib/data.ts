import { PlaceHolderImages } from './placeholder-images';

export type NovenaDay = {
  day: number;
  title: string;
  prayer: string;
};

export type Novena = {
  title: string;
  days: NovenaDay[];
};

export type Saint = {
  id: string;
  name: string;
  month: string;
  imageUrl: string;
  novena: Novena;
};

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const saints: Saint[] = [
  {
    id: 'st-francis-assisi',
    name: 'São Francisco de Assis',
    month: 'Outubro',
    imageUrl: getImage('saint-francis'),
    novena: {
      title: 'Novena a São Francisco de Assis',
      days: Array.from({ length: 9 }, (_, i) => ({
        day: i + 1,
        title: `Oração do ${i + 1}º Dia`,
        prayer: `Senhor, fazei de mim um instrumento da Vossa paz. Onde houver ódio, que eu leve o amor. Onde houver ofensa, que eu leve o perdão. Onde houver discórdia, que eu leve a união. Onde houver dúvida, que eu leve a fé. No ${i + 1}º dia, pedimos especialmente pela virtude da humildade. São Francisco, rogai por nós.`,
      })),
    },
  },
  {
    id: 'st-therese-lisieux',
    name: 'Santa Teresinha do Menino Jesus',
    month: 'Outubro',
    imageUrl: getImage('saint-therese'),
    novena: {
      title: 'Novena das Rosas a Santa Teresinha',
      days: Array.from({ length: 9 }, (_, i) => ({
        day: i + 1,
        title: `Meditação do ${i + 1}º Dia`,
        prayer: `Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos agradeço todos os favores, todas as graças com que enriquecestes a alma de Vossa serva Santa Teresinha do Menino Jesus, durante os 24 anos que passou na terra. E pelos méritos de tão querida Santa, concedei-me a graça que ardentemente Vos peço, se for conforme a Vossa santíssima vontade e para salvação de minha alma. No ${i + 1}º dia, contemplamos a pequena via.`,
      })),
    },
  },
  {
    id: 'st-clare-assisi',
    name: 'Santa Clara de Assis',
    month: 'Novembro',
    imageUrl: getImage('saint-clare'),
    novena: {
      title: 'Novena a Santa Clara de Assis',
      days: Array.from({ length: 9 }, (_, i) => ({
        day: i + 1,
        title: `Reflexão do ${i + 1}º Dia`,
        prayer: `Ó amantíssima Santa Clara, que seguistes de perto São Francisco na vida de radical pobreza e de puro amor a Cristo e aos irmãos, olhai com bondade para mim, que desejo ardentemente seguir o vosso exemplo. No ${i + 1}º dia, peço a graça de um coração desapegado dos bens materiais.`,
      })),
    },
  },
  {
    id: 'st-anthony-padua',
    name: 'Santo Antônio de Pádua',
    month: 'Novembro',
    imageUrl: getImage('saint-anthony'),
    novena: {
      title: 'Novena a Santo Antônio',
      days: Array.from({ length: 9 }, (_, i) => ({
        day: i + 1,
        title: `Súplica do ${i + 1}º Dia`,
        prayer: `Meu querido Santo Antônio, dos mais íntimos de Deus, intercedei por mim. Eu vos saúdo, grande santo, e vos agradeço o amor que tivestes a Deus e ao próximo. No ${i + 1}º dia, peço vossa ajuda para encontrar a paz em meu coração.`,
      })),
    },
  },
];

export const months: string[] = ['Outubro', 'Novembro'];
