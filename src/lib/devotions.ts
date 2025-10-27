
export type Devotion = {
    dayOfWeek: number;
    day: string;
    title: string;
    devotion: string;
    icon: string;
    alert?: string;
};

export type MonthlyDevotion = {
    month: number;
    name: string;
    devotion: string;
    icon: string;
};

export type LiturgicalInfo = {
    color: 'green' | 'purple' | 'red' | 'white' | 'rose';
    season: string;
    week: number;
    verse: string;
};

export const weeklyDevotions: Devotion[] = [
    {
      dayOfWeek: 0,
      day: 'Domingo',
      title: 'Domingo - Dia do Senhor',
      devotion: 'Ressurreição de Cristo',
      icon: 'sunday',
    },
    {
      dayOfWeek: 1,
      day: 'Segunda',
      title: 'Segunda-feira',
      devotion: 'Espírito Santo e Almas do Purgatório',
      icon: 'monday',
    },
    {
      dayOfWeek: 2,
      day: 'Terça',
      title: 'Terça-feira',
      devotion: 'Santos Anjos',
      icon: 'tuesday',
    },
    {
      dayOfWeek: 3,
      day: 'Quarta',
      title: 'Quarta-feira',
      devotion: 'São José',
      icon: 'wednesday',
    },
    {
      dayOfWeek: 4,
      day: 'Quinta',
      title: 'Quinta-feira',
      devotion: 'Santíssimo Sacramento',
      icon: 'thursday',
    },
    {
      dayOfWeek: 5,
      day: 'Sexta',
      title: 'Sexta-feira',
      devotion: 'Paixão de Cristo e Sagrado Coração',
      icon: 'friday',
      alert: 'Abstinência de carne',
    },
    {
      dayOfWeek: 6,
      day: 'Sábado',
      title: 'Sábado',
      devotion: 'Nossa Senhora',
      icon: 'saturday',
    },
];

export const monthlyDevotions: MonthlyDevotion[] = [
    { month: 0, name: 'Janeiro', devotion: 'Santíssimo Nome de Jesus', icon: 'monthly-jan' },
    { month: 1, name: 'Fevereiro', devotion: 'Sagrada Família', icon: 'monthly-feb' },
    { month: 2, name: 'Março', devotion: 'São José', icon: 'monthly-mar' },
    { month: 3, name: 'Abril', devotion: 'Eucaristia e Espírito Santo', icon: 'monthly-apr' },
    { month: 4, name: 'Maio', devotion: 'Virgem Maria', icon: 'monthly-may' },
    { month: 5, name: 'Junho', devotion: 'Sagrado Coração de Jesus', icon: 'monthly-jun' },
    { month: 6, name: 'Julho', devotion: 'Preciosíssimo Sangue', icon: 'monthly-jul' },
    { month: 7, name: 'Agosto', devotion: 'Vocações', icon: 'monthly-aug' },
    { month: 8, name: 'Setembro', devotion: 'Bíblia', icon: 'monthly-sep' },
    { month: 9, name: 'Outubro', devotion: 'Rosário e Missões', icon: 'monthly-oct' },
    { month: 10, name: 'Novembro', devotion: 'Almas do Purgatório', icon: 'monthly-nov' },
    { month: 11, name: 'Dezembro', devotion: 'Advento e Natal', icon: 'monthly-dec' },
];

function getWeek(date: Date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = (date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return Math.ceil((day + start.getDay() + 1) / 7);
}


// Mock function for liturgical data.
// A real implementation would require a complex liturgical calendar logic.
export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    
    // Hardcoding for the 30th week of Ordinary Time for now as requested.
    const week = 30; 

    // Placeholder verses - in a real app this would come from an API
    const verses = [
        "Jo 3,16", "Mt 28,19", "Lc 1,38", "Sl 23,1", "1Cor 13,4",
        "Fl 4,13", "Rm 8,28", "Is 41,10", "Jr 29,11", "Pv 3,5"
    ];
    const verse = verses[(dayOfMonth -1) % verses.length];


    // Simplified logic for seasons
    if ((month === 11 && dayOfMonth >= 1 && dayOfMonth < 25) || (month === 2 && dayOfMonth > 10)) { // Advent & Lent
        return { color: 'purple', season: 'Advento/Quaresma', week: week % 4 + 1, verse };
    }
    if ((month === 11 && dayOfMonth >= 25) || month === 0 && dayOfMonth < 15) { // Christmas
        return { color: 'white', season: 'Tempo do Natal', week: week % 2 + 1, verse };
    }
     if (month === 4 || month === 5) { // Easter
        return { color: 'white', season: 'Tempo Pascal', week: week % 7 + 1, verse };
    }

    // Ordinary Time
    return { color: 'green', season: 'Tempo Comum', week: week, verse };
}
