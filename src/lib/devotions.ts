
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
    verse: string;
    cycle: 'A' | 'B' | 'C';
};

const dailyGospels: Record<string, string> = {
    '10-29': 'Lucas 13, 22-30',
    '10-30': 'Lucas 13, 31-35',
    '10-31': 'Lucas 14, 1-6',
    '11-1': 'Mateus 5, 1-12a', 
    '11-2': 'João 6, 37-40', 
    '11-3': 'Lucas 14, 12-14',
    '11-4': 'Lucas 14, 15-24',
    '11-5': 'Lucas 14, 25-33',
    '11-6': 'Lucas 15, 1-10',
    '11-7': 'Lucas 16, 1-8',
    '11-8': 'Lucas 16, 9-15',
    '11-9': 'João 2, 13-22', 
    '11-10': 'Lucas 17, 1-6',
    '11-11': 'Lucas 17, 7-10',
    '11-12': 'Lc 17, 11-19', 
    '11-13': 'Lc 17, 20-25',
    '11-14': 'Lc 17, 26-37',
    '11-15': 'Lc 18, 1-8',   
    '11-16': 'Lc 21, 5-19',  
    '11-17': 'Lc 18, 35-43', 
    '11-18': 'Lc 19, 1-10',  
    '11-19': 'Lc 19, 11-28', 
    '11-20': 'Lc 19, 41-44', 
    '11-21': 'Lc 19, 45-48',
    '11-22': 'Lc 20, 27-40',
    '11-23': 'Lc 23, 35-43',
    '11-24': 'Lc 21, 1-4',  
    '11-25': 'Lc 21, 5-11',
    '11-26': 'Lc 21, 12-19',
    '11-27': 'Lc 21, 20-28',
    '11-28': 'Lc 21, 29-33',
    '11-29': 'Lc 21, 34-36',
    '11-30': 'Mt 24, 37-44',
    '12-1': 'Mt 8, 5-11',
    '12-2': 'Lc 10, 21-24',
    '12-3': 'Mt 15, 29-37',
    '12-4': 'Is 26, 1-6',
    '12-5': 'Mt 9, 27-31',
    '12-6': 'Mt 9, 35-10, 1.6-8',
    '12-7': 'Mt 3, 1-12',
    '12-8': 'Lc 1, 26-38',
    '12-9': 'Mt 18, 12-14',
    '12-10': 'Mt 11, 28-30',
    '12-11': 'Mt 11, 11-15',
    '12-12': 'Lc 1, 39-47',
    '12-13': 'Mt 17, 9a.10-13',
    '12-14': 'Mt 11, 2-11',
    '12-15': 'Lc 7, 24-30',
    '12-16': 'Lc 7, 18b-23',
    '12-17': 'Lc 7, 19-25',
    '12-18': 'Lc 1, 5-25',
    '12-19': 'Lc 1, 26-38',
    '12-20': 'Lc 1, 39-45',
    '12-21': 'Mt 1, 18-24',
    '12-22': 'Lc 1, 46-56',
    '12-23': 'Mt 1, 18-25',
    '12-24': 'Lc 1, 67-79',
    '12-24-night': 'Lc 2, 1-14',
    '12-25': 'Jo 1, 1-18',
    '12-26': 'Mt 10, 17-22',
    '12-27': 'Jo 20, 2-8',
    '12-28': 'Mt 2, 13-15.19-23',
    '12-29': 'Lc 2, 22-35',
    '12-30': 'Lc 2, 36-40',
    '12-31': 'Lc 2, 20-22',
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
      devotion: 'dedicado a São José',
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

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
};

const getEaster = (year: number): Date => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(Date.UTC(year, month - 1, day));
};

const getFirstSundayOfAdvent = (year: number): Date => {
    const christmas = new Date(Date.UTC(year, 11, 25));
    const dayOfWeek = christmas.getUTCDay(); // 0=Sunday, 1=Monday...
    const sundayBeforeChristmas = addDays(christmas, -dayOfWeek);
    return addDays(sundayBeforeChristmas, -21);
};


const getLiturgicalYearCycle = (date: Date): { year: number; cycle: 'A' | 'B' | 'C' } => {
    const year = date.getUTCFullYear();
    const firstSundayOfAdventCurrentYear = getFirstSundayOfAdvent(year);
    
    const liturgicalYear = date >= firstSundayOfAdventCurrentYear ? year : year - 1;

    // The cycle repeats every 3 years.
    // Cycle A started on Advent 2022. Liturgical year 2022-2023.
    const cycleYear = date >= firstSundayOfAdventCurrentYear ? year : year - 1;
    
    let cycle: 'A' | 'B' | 'C';
    const diff = cycleYear - 2022;
    // We use a positive modulo operator
    const cycleIndex = ((diff % 3) + 3) % 3;

    switch (cycleIndex) {
        case 0: cycle = 'A'; break;
        case 1: cycle = 'B'; break;
        case 2: cycle = 'C'; break;
        default: cycle = 'A'; // Fallback
    }
    
    return { year: liturgicalYear, cycle };
}

function isSameDay(d1: Date, d2: Date) {
    if (!d1 || !d2) return false;
    return d1.getUTCFullYear() === d2.getUTCFullYear() &&
           d1.getUTCMonth() === d2.getUTCMonth() &&
           d1.getUTCDate() === d2.getUTCDate();
}

export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    
    const today = new Date(Date.UTC(year, month, dayOfMonth));

    const { cycle } = getLiturgicalYearCycle(today);
    
    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    
    const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
    const christmas = new Date(Date.UTC(year, 11, 25));
    
    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
    
    if (today >= firstSundayOfAdvent && today < christmas) {
        season = 'Advento';
        color = 'purple';
        const thirdSundayOfAdvent = addDays(firstSundayOfAdvent, 14);
        if (isSameDay(today, thirdSundayOfAdvent)) {
            color = 'rose';
        }
    } else if ((today.getUTCMonth() === 11 && today.getUTCDate() >= 25) || (today.getUTCMonth() === 0 && today < new Date(Date.UTC(year, 0, 6)))) {
        const baptismDate = addDays(new Date(Date.UTC(year, 0, 6)), (7 - new Date(Date.UTC(year, 0, 6)).getUTCDay()) % 7);
        if (today < baptismDate) {
            season = 'Natal';
            color = 'white';
        }
    } else if (today >= ashWednesday && today < easter) {
        season = 'Quaresma';
        color = 'purple';
        const fourthSundayOfLent = addDays(ashWednesday, 25);
        if (isSameDay(today, fourthSundayOfLent)) {
            color = 'rose';
        }
    } else if (today >= easter && today <= pentecost) {
        season = 'Páscoa';
        color = 'white';
    }

    const dayKey = `${month + 1}-${dayOfMonth}`;

    if (year === 2024) {
        if (dayKey === '11-12') color = 'red'; // S. Josafá
        if (dayKey === '11-17') color = 'green'; // 33rd Sunday
        if (dayKey === '11-21') color = 'white'; // Apresentação de N. Sra.
        if (dayKey === '11-22') color = 'red'; // Santa Cecília
        if (dayKey === '11-24') { 
            const christTheKing = addDays(getFirstSundayOfAdvent(2024), -7);
            if(isSameDay(today, christTheKing)){
                color = 'white';
                season = 'Cristo Rei';
            }
        }
        if (dayKey === '11-30') color = 'red'; // Santo André
        if (dayKey === '12-3') color = 'white'; // S. Francisco Xavier
        if (dayKey === '12-8') color = 'white';
        if (dayKey === '12-12') color = 'white';
        if (dayKey === '12-13') color = 'red';
        if (dayKey === '12-14') {
             const thirdSundayOfAdvent = addDays(getFirstSundayOfAdvent(2024), 14);
             if(isSameDay(today, thirdSundayOfAdvent)) color = 'rose';
        }
        if (dayKey === '12-26') color = 'red';
        if (dayKey === '12-27') color = 'white';
        if (dayKey === '12-28') color = 'white';
    }


    let verseKey = `${month + 1}-${dayOfMonth}`;
    if (month === 11 && dayOfMonth === 24 && date.getHours() >= 18) {
      verseKey = '12-24-night';
    }
    
    let verse = dailyGospels[verseKey] || `Ev. do Dia`;

    let finalSeasonText = season;
    if (dayKey === '11-1') finalSeasonText = 'Todos os Santos';
    if (dayKey === '11-2') finalSeasonText = 'Fiéis Defuntos';
    if (dayKey === '11-9') finalSeasonText = 'Ded. Bas. de Latrão';
    if (dayKey === '11-21') finalSeasonText = 'Apres. de N. Senhora';
    if (year === 2024 && dayKey === '11-24') {
        const christTheKing = addDays(getFirstSundayOfAdvent(2024), -7);
        if(isSameDay(today, christTheKing)){
            finalSeasonText = 'Cristo Rei';
        }
    }
    if (dayKey === '12-8') finalSeasonText = 'Imaculada Conceição';
    if (dayKey === '12-12') finalSeasonText = 'N.S. Guadalupe';
    if (dayKey === '12-25') finalSeasonText = 'Natal do Senhor';
    if (dayKey === '12-28') finalSeasonText = 'Sagrada Família';


    return { color, season: finalSeasonText, verse, cycle };
}
