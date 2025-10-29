
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
    cycle: 'A' | 'B' | 'C';
};

const dailyGospels: Record<string, string> = {
    // October 2025
    '10-29': 'Lucas 13, 22-30',
    '10-30': 'Lucas 13, 31-35',
    '10-31': 'Lucas 14, 1-6',
    // November 2025
    '11-1': 'Mateus 5, 1-12a', // All Saints
    '11-2': 'João 6, 37-40', // All Souls
    '11-3': 'Lucas 14, 12-14',
    '11-4': 'Lucas 14, 15-24',
    '11-5': 'Lucas 14, 25-33',
    '11-6': 'Lucas 15, 1-10',
    '11-7': 'Lucas 16, 1-8',
    '11-8': 'Lucas 16, 9-15',
    '11-9': 'João 2, 13-22', // Dedication of the Lateran Basilica
    '11-10': 'Lucas 17, 1-6',
    '11-11': 'Lucas 17, 7-10',
    '11-12': 'Lucas 17, 11-19',
    '11-13': 'Lucas 17, 20-25',
    '11-14': 'Lucas 17, 26-37',
    '11-15': 'Lucas 18, 1-8',
    '11-16': 'Marcos 13, 24-32', // 33rd Sunday in Ordinary Time
    '11-17': 'Lucas 18, 35-43',
    '11-18': 'Lucas 19, 1-10',
    '11-19': 'Lucas 19, 11-28',
    '11-20': 'Lucas 19, 41-44',
    '11-21': 'Mateus 12, 46-50', // Presentation of Mary
    '11-22': 'Lucas 20, 27-40',
    '11-23': 'João 18, 33b-37', // Christ the King
    '11-24': 'Lucas 21, 1-4',
    '11-25': 'Lucas 21, 5-11',
    '11-26': 'Lucas 21, 12-19',
    '11-27': 'Lucas 21, 20-28',
    '11-28': 'Lucas 21, 29-33',
    '11-29': 'Lucas 21, 34-36',
    '11-30': 'Marcos 13, 33-37', // 1st Sunday of Advent
    // December 2025
    '12-1': 'Mateus 8, 5-11',
    '12-2': 'Lucas 10, 21-24',
    '12-3': 'Marcos 16, 15-20', // St. Francis Xavier
    '12-4': 'Mateus 7, 21.24-27',
    '12-5': 'Mateus 9, 27-31',
    '12-6': 'Mateus 9, 35-10, 1.6-8',
    '12-7': 'Marcos 1, 1-8', // 2nd Sunday of Advent
    '12-8': 'Lucas 1, 26-38', // Immaculate Conception
    '12-9': 'Mateus 18, 12-14',
    '12-10': 'Mateus 11, 28-30',
    '12-11': 'Mateus 11, 11-15',
    '12-12': 'Lucas 1, 39-47', // Our Lady of Guadalupe
    '12-13': 'Mateus 17, 10-13',
    '12-14': 'João 1, 6-8.19-28', // 3rd Sunday of Advent (Gaudete)
    '12-15': 'Mateus 21, 23-27',
    '12-16': 'Mateus 21, 28-32',
    '12-17': 'Mateus 1, 1-17',
    '12-18': 'Mateus 1, 18-24',
    '12-19': 'Lucas 1, 5-25',
    '12-20': 'Lucas 1, 26-38',
    '12-21': 'Lucas 1, 26-38', // 4th Sunday of Advent
    '12-22': 'Lucas 1, 39-45',
    '12-23': 'Lucas 1, 57-66',
    '12-24': 'Lucas 1, 67-79', // Morning
    '12-25': 'João 1, 1-18', // Christmas Day
    '12-26': 'Mateus 10, 17-22', // St. Stephen
    '12-27': 'João 20, 2-8', // St. John the Apostle
    '12-28': 'Lucas 2, 22-40', // Holy Family
    '12-29': 'Lucas 2, 22-35',
    '12-30': 'Lucas 2, 36-40',
    '12-31': 'João 1, 1-18',
};

// Add Christmas Eve (Vigil) separately due to time
dailyGospels['12-24-night'] = 'Lucas 2, 1-14';


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
    let dayOfWeek = christmas.getUTCDay();
    const daysToSubtract = dayOfWeek + (3 * 7);
    return addDays(christmas, -daysToSubtract);
};

const getLiturgicalYearCycle = (date: Date): { year: number; cycle: 'A' | 'B' | 'C' } => {
    let year = date.getUTCFullYear();
    const firstSundayOfAdventCurrentYear = getFirstSundayOfAdvent(year);
    
    let liturgicalYearStartYear = year;
    if (date < firstSundayOfAdventCurrentYear) {
      liturgicalYearStartYear = year - 1;
    }
  
    // O ano litúrgico C começa no Advento de 2024 (que leva a 2025).
    // Anos que são (ano % 3 == 1) são ciclo A (ex: 2023).
    // Anos que são (ano % 3 == 2) são ciclo B (ex: 2024).
    // Anos que são (ano % 3 == 0) são ciclo C (ex: 2025).
    // A referência é o ano civil em que começa o Advento.
    // Ex: Advento 2024 -> Ano Litúrgico 2025 -> Ciclo C.
    // (2024 % 3) = 1. Mas o ciclo do ano litúrgico 2025 é C.
    // A regra é: Ano Litúrgico = Ano Civil + 1. Ciclo C = 2024, Ciclo A = 2025, Ciclo B = 2026.
    
    // O Ano Litúrgico 2025 (Ciclo C) começa no Advento de 2024.
    // O Ano Litúrgico 2026 (Ciclo A) começa no Advento de 2025.
    
    const cycleMap: ('C' | 'A' | 'B')[] = ['C', 'A', 'B'];
    const cycle = cycleMap[liturgicalYearStartYear % 3];

    return { year: liturgicalYearStartYear, cycle };
}

function isSameDay(d1: Date, d2: Date) {
    return d1.getUTCFullYear() === d2.getUTCFullYear() &&
           d1.getUTCMonth() === d2.getUTCMonth() &&
           d1.getUTCDate() === d2.getUTCDate();
}


export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getUTCFullYear();
    const today = date;

    const { cycle, year: liturgicalYearNumber } = getLiturgicalYearCycle(today);
    
    const firstSundayOfAdventPrevYear = getFirstSundayOfAdvent(liturgicalYearNumber);
    
    const christmas = new Date(Date.UTC(year, 11, 25));
    const isAfterChristmas = today >= christmas;

    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    const trinitySunday = addDays(easter, 56);
    const corpusChristi = addDays(easter, 60);

    const epiphany = new Date(Date.UTC(year, 0, 6));
    const dayOfWeekEpiphany = epiphany.getUTCDay();
    const baptismOfTheLord = dayOfWeekEpiphany > 0 && dayOfWeekEpiphany <= 6 
      ? addDays(epiphany, 7-dayOfWeekEpiphany) 
      : addDays(epiphany, 1);

    const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
    const christTheKing = addDays(firstSundayOfAdvent, -7);
    
    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
    let week = 0;
    
    // Advent
    if (today >= firstSundayOfAdvent && today < christmas) {
        season = 'Advento';
        color = 'purple';
        const daysIntoAdvent = Math.floor((today.getTime() - firstSundayOfAdvent.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoAdvent / 7) + 1;
        if (week === 3) color = 'rose'; // Gaudete Sunday
    }
    // Christmas Time
    else if ((today >= christmas && today.getUTCFullYear() === year) || (today <= baptismOfTheLord && today.getUTCFullYear() === year)) {
        season = 'Tempo do Natal';
        color = 'white';
        const christmasThisSeason = new Date(Date.UTC(liturgicalYearNumber, 11, 25));
        const daysIntoChristmas = Math.floor((today.getTime() - christmasThisSeason.getTime() ) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoChristmas / 7) + 1;
    }
    // Lent
    else if (today >= ashWednesday && today < easter) {
        season = 'Quaresma';
        color = 'purple';
        const daysIntoLent = Math.floor((today.getTime() - ashWednesday.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoLent / 7) + 1;
        if (week === 4) color = 'rose'; // Laetare Sunday
    }
    // Easter Time
    else if (today >= easter && today <= pentecost) {
        season = 'Tempo Pascal';
        color = 'white';
        const daysIntoEaster = Math.floor((today.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoEaster / 7) + 1;
    }
    // Ordinary Time
    else {
        season = 'Tempo Comum';
        color = 'green';
        if (today > pentecost) {
             const weeksInYear = 52;
             const weeksAfterPentecost = Math.floor((today.getTime() - pentecost.getTime()) / (1000 * 60 * 60 * 24 * 7));
             // A contagem das semanas do tempo comum recomeça depois de pentecostes.
             // O número da semana é calculado subtraindo as semanas de outros tempos.
             const weeksOfLentAndEaster = Math.ceil((pentecost.getTime() - ashWednesday.getTime()) / (1000*60*60*24*7));
             const weekAfterBaptism = Math.ceil((ashWednesday.getTime() - baptismOfTheLord.getTime()) / (1000*60*60*24*7));
             week = weekAfterBaptism + weeksAfterPentecost + 1;

        } else if (today > baptismOfTheLord) {
             const daysFromBaptism = Math.floor((today.getTime() - baptismOfTheLord.getTime()) / (1000 * 60 * 60 * 24));
             week = Math.floor(daysFromBaptism / 7) + 2; // Começa na 2a semana
        }
    }
    
    // Overrides for Solemnities, Feasts, and Memorials
    const month = today.getUTCMonth() + 1; // 1-12
    const dayOfMonth = today.getUTCDate();

    // Red
    if (isSameDay(today, addDays(easter, -7))) { season = 'Domingo de Ramos'; color = 'red'; }
    if (isSameDay(today, addDays(easter, -2))) { season = 'Sexta-feira Santa'; color = 'red'; }
    if (isSameDay(today, pentecost)) { season = 'Pentecostes'; color = 'red'; }
    // Feasts of Apostles and Martyrs
    if ((month === 9 && dayOfMonth === 14) || (month === 4 && dayOfMonth === 25) || (month === 6 && dayOfMonth === 29) || (month === 10 && dayOfMonth === 28) || (month === 12 && dayOfMonth === 26)) {
        color = 'red';
    }

    // White
    if (isSameDay(today, trinitySunday)) { season = 'Santíssima Trindade'; color = 'white'; }
    if (isSameDay(today, corpusChristi)) { season = 'Corpo e Sangue de Cristo'; color = 'white'; }
    if (isSameDay(today, christTheKing)) { season = 'Solenidade de Cristo Rei'; color = 'white'; }
    if (month === 1 && dayOfMonth === 1) { season = 'Solenidade de Santa Maria, Mãe de Deus'; color = 'white'; }
    if (month === 3 && dayOfMonth === 19) { season = 'Solenidade de São José'; color = 'white'; }
    if (month === 3 && dayOfMonth === 25) { season = 'Solenidade da Anunciação do Senhor'; color = 'white'; }
    if (month === 8 && dayOfMonth === 15) { season = 'Solenidade da Assunção de Nossa Senhora'; color = 'white'; }
    if (month === 11 && dayOfMonth === 1) { season = 'Solenidade de Todos os Santos'; color = 'white'; }
    if (month === 11 && dayOfMonth === 9) { season = 'Dedicação da Basílica de Latrão'; color = 'white';}
    if (month === 12 && dayOfMonth === 8) { season = 'Solenidade da Imaculada Conceição'; color = 'white'; }
    if (month === 12 && dayOfMonth === 25) { season = 'Natal do Senhor'; color = 'white'; }
    if (month === 12 && dayOfMonth === 27) { color = 'white'; } // São João
    if (isSameDay(today, addDays(christmas, today.getUTCDay() === 0 ? 0 : 7 - today.getUTCDay()))) { // Domingo após o Natal
        if(today > christmas) {
           season = 'Sagrada Família'; color = 'white';
        }
    }


    // Purple for All Souls
    if (month === 11 && dayOfMonth === 2) { season = 'Fiéis Defuntos'; color = 'purple'; }
    
    // Get verse from dailyGospels
    let verseKey = `${month}-${dayOfMonth}`;
    if (month === 12 && dayOfMonth === 24 && date.getHours() >= 18) { // Christmas Eve Vigil
      verseKey = '12-24-night';
    }
    
    let verse = dailyGospels[verseKey] || `Ev. do dia (${cycle})`;


    return { color, season, week, verse, cycle };
}
