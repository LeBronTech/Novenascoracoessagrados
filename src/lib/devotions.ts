
export type Devotion = {
    day: string;
    title: string;
    devotion: string;
    icon: string;
    alert?: string;
};

export const weeklyDevotions: Devotion[] = [
    {
      day: 'Domingo',
      title: 'Domingo - Dia do Senhor',
      devotion: 'Ressurreição de Cristo',
      icon: 'Heart',
    },
    {
      day: 'Segunda',
      title: 'Segunda-feira',
      devotion: 'Espírito Santo e Almas do Purgatório',
      icon: 'Flame',
    },
    {
      day: 'Terça',
      title: 'Terça-feira',
      devotion: 'Santos Anjos',
      icon: 'Users',
    },
    {
      day: 'Quarta',
      title: 'Quarta-feira',
      devotion: 'São José',
      icon: 'Hammer',
    },
    {
      day: 'Quinta',
      title: 'Quinta-feira',
      devotion: 'Santíssimo Sacramento',
      icon: 'Grape',
    },
    {
      day: 'Sexta',
      title: 'Sexta-feira',
      devotion: 'Paixão de Cristo e Sagrado Coração',
      icon: 'Beef',
      alert: 'Abstinência de carne',
    },
    {
      day: 'Sábado',
      title: 'Sábado',
      devotion: 'Nossa Senhora',
      icon: 'Heart',
    },
];
