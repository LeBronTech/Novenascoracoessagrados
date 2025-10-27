
export type Devotion = {
    day: string;
    title: string;
    devotion: string;
    icon: string;
    alert?: string;
};

export const weeklyDevotions: Devotion[] = [
    {
      day: 'Dom',
      title: 'Domingo',
      devotion: 'Ressurreição de Cristo',
      icon: 'Flame',
    },
    {
      day: 'Seg',
      title: 'Segunda-feira',
      devotion: 'Espírito Santo e Almas do Purgatório',
      icon: 'Shield',
    },
    {
      day: 'Ter',
      title: 'Terça-feira',
      devotion: 'Santos Anjos',
      icon: 'Users',
    },
    {
      day: 'Qua',
      title: 'Quarta-feira',
      devotion: 'São José',
      icon: 'Hammer',
    },
    {
      day: 'Qui',
      title: 'Quinta-feira',
      devotion: 'Santíssimo Sacramento',
      icon: 'Grape',
    },
    {
      day: 'Sex',
      title: 'Sexta-feira',
      devotion: 'Paixão de Cristo e Sagrado Coração',
      icon: 'Beef',
      alert: 'Abstinência de carne',
    },
    {
      day: 'Sáb',
      title: 'Sábado',
      devotion: 'Nossa Senhora',
      icon: 'Heart',
    },
];
