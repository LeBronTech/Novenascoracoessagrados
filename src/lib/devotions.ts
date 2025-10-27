
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
    verse: string;
    citation: string;
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

// Mock function for liturgical data.
// A real implementation would require a complex liturgical calendar logic.
export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
    
    // This is a simplified logic, not a real liturgical calendar.
    if (date.getMonth() === 11 && date.getDate() < 25) {
        return { color: 'purple', verse: "Vigiai, pois, porque não sabeis o dia nem a hora.", citation: "Mt 25, 13" };
    }
    if (date.getDay() === 0) { // Sunday
        return { color: 'white', verse: "Este é o dia que o Senhor fez; exultemos e alegremo-nos nele.", citation: "Sl 118, 24" };
    }
    
    const colors: LiturgicalInfo['color'][] = ['green', 'white', 'red', 'purple'];
    const color = colors[dayOfYear % colors.length];

    switch(color) {
        case 'red':
            return { color: 'red', verse: "Quem quiser ser o primeiro, seja o servo de todos.", citation: "Mc 10, 44" };
        case 'white':
            return { color: 'white', verse: "Eu sou a luz do mundo; quem me segue não andará nas trevas.", citation: "Jo 8, 12" };
        case 'purple':
            return { color: 'purple', verse: "Convertei-vos, porque o Reino dos Céus está próximo.", citation: "Mt 3, 2" };
        default:
            return { color: 'green', verse: "A messe é grande, mas os trabalhadores são poucos.", citation: "Lc 10, 2" };
    }
}
