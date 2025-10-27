
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
      icon: 'sunday',
    },
    {
      day: 'Segunda',
      title: 'Segunda-feira',
      devotion: 'Espírito Santo e Almas do Purgatório',
      icon: 'monday',
    },
    {
      day: 'Terça',
      title: 'Terça-feira',
      devotion: 'Santos Anjos',
      icon: 'tuesday',
    },
    {
      day: 'Quarta',
      title: 'Quarta-feira',
      devotion: 'São José',
      icon: 'wednesday',
    },
    {
      day: 'Quinta',
      title: 'Quinta-feira',
      devotion: 'Santíssimo Sacramento',
      icon: 'thursday',
    },
    {
      day: 'Sexta',
      title: 'Sexta-feira',
      devotion: 'Paixão de Cristo e Sagrado Coração',
      icon: 'friday',
      alert: 'Abstinência de carne',
    },
    {
      day: 'Sábado',
      title: 'Sábado',
      devotion: 'Nossa Senhora',
      icon: 'saturday',
    },
];

    