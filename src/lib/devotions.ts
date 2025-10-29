
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
  result.setDate(result.getDate() + days);
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
    return new Date(year, month - 1, day);
};

const getFirstSundayOfAdvent = (year: number): Date => {
    const christmas = new Date(year, 11, 25);
    let dayOfWeek = christmas.getDay();
    if(dayOfWeek === 0) dayOfWeek = 7; 
    const daysToSubtract = dayOfWeek + (3 * 7);
    return addDays(christmas, -daysToSubtract);
};

const getLiturgicalYearCycle = (date: Date): { year: number; cycle: 'A' | 'B' | 'C' } => {
    let year = date.getFullYear();
    const firstSundayOfAdventCurrentYear = getFirstSundayOfAdvent(year);
    
    if (date < firstSundayOfAdventCurrentYear) {
        year--;
    }

    const cycleIndex = year % 3;
    const cycle = cycleIndex === 0 ? 'B' : cycleIndex === 1 ? 'C' : 'A'; // Ajustado conforme o ciclo
    return { year: year, cycle };
}

function isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}


export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getFullYear();
    const today = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    const { cycle, year: liturgicalYearNumber } = getLiturgicalYearCycle(today);
    
    const firstSundayOfAdventPrevYear = getFirstSundayOfAdvent(liturgicalYearNumber);
    const firstSundayOfAdventCurrentYear = getFirstSundayOfAdvent(year);
    
    const christmas = new Date(Date.UTC(year, 11, 25));
    const isAfterChristmas = today >= new Date(Date.UTC(year, 11, 25));

    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    const trinitySunday = addDays(easter, 56);
    const corpusChristi = addDays(easter, 60);

    const epiphany = new Date(Date.UTC(year, 0, 6));
    const dayOfWeekEpiphany = epiphany.getDay();
    const baptismOfTheLord = dayOfWeekEpiphany > 1 && dayOfWeekEpiphany < 7 ? addDays(epiphany, 7-dayOfWeekEpiphany) : addDays(epiphany, 1);

    const firstSundayOfAdvent = today >= firstSundayOfAdventCurrentYear ? firstSundayOfAdventCurrentYear : firstSundayOfAdventPrevYear;
    const christTheKing = addDays(firstSundayOfAdvent, (34 * 7) - 1);
    
    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
    let week = 0;
    let verse = `Evangelho: Ano ${cycle}`;

    // Advent
    if (today >= firstSundayOfAdvent && today < christmas) {
        season = 'Advento';
        color = 'purple';
        const daysIntoAdvent = Math.floor((today.getTime() - firstSundayOfAdvent.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoAdvent / 7) + 1;
        if (week === 3) color = 'rose'; // Gaudete Sunday
    }
    // Christmas Time
    else if ((today >= christmas) || (today.getFullYear() === year && today <= baptismOfTheLord)) {
        season = 'Tempo do Natal';
        color = 'white';
        const daysIntoChristmas = Math.floor((today.getTime() - (isAfterChristmas ? christmas.getTime() : new Date(Date.UTC(year-1, 11, 25)).getTime()) ) / (1000 * 60 * 60 * 24));
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
             const daysFromPentecost = Math.floor((today.getTime() - pentecost.getTime()) / (1000 * 60 * 60 * 24));
             const pentecostWeek = 34 - Math.floor((firstSundayOfAdvent.getTime() - pentecost.getTime()) / (1000 * 60 * 60 * 24 * 7));
             week = pentecostWeek + Math.floor(daysFromPentecost/7);
        } else {
             const daysFromBaptism = Math.floor((today.getTime() - baptismOfTheLord.getTime()) / (1000 * 60 * 60 * 24));
             week = Math.floor(daysFromBaptism / 7) + 1;
        }
    }
    
    // Overrides for Solemnities, Feasts, and Memorials
    const month = today.getUTCMonth();
    const dayOfMonth = today.getUTCDate();
    const dayOfWeek = today.getUTCDay();

    // Red
    if (isSameDay(today, addDays(easter, -7))) { season = 'Domingo de Ramos'; color = 'red'; }
    if (isSameDay(today, addDays(easter, -2))) { season = 'Sexta-feira Santa'; color = 'red'; }
    if (isSameDay(today, pentecost)) { season = 'Pentecostes'; color = 'red'; }
    if ((month === 8 && dayOfMonth === 14) || (month === 4 && dayOfMonth === 25) || (month === 6 && dayOfMonth === 29) || (month === 10 && dayOfMonth === 28)) {
        color = 'red'; // Exaltation of the Holy Cross, St. Mark, Sts. Peter and Paul, Sts. Simon and Jude
    }


    // White
    if (isSameDay(today, trinitySunday)) { season = 'Santíssima Trindade'; color = 'white'; }
    if (isSameDay(today, corpusChristi)) { season = 'Corpo e Sangue de Cristo'; color = 'white'; }
    if (isSameDay(today, christTheKing)) { season = 'Solenidade de Cristo Rei'; color = 'white'; }
    if (month === 0 && dayOfMonth === 1) { season = 'Solenidade de Santa Maria, Mãe de Deus'; color = 'white'; }
    if (month === 2 && dayOfMonth === 19) { season = 'Solenidade de São José'; color = 'white'; }
    if (month === 2 && dayOfMonth === 25) { season = 'Solenidade da Anunciação do Senhor'; color = 'white'; }
    if (month === 7 && dayOfMonth === 15) { season = 'Solenidade da Assunção de Nossa Senhora'; color = 'white'; }
    if (month === 10 && dayOfMonth === 1) { season = 'Solenidade de Todos os Santos'; color = 'white'; }
    if (month === 11 && dayOfMonth === 8) { season = 'Solenidade da Imaculada Conceição'; color = 'white'; }
    if (month === 11 && dayOfMonth === 25) { season = 'Natal do Senhor'; color = 'white'; }
    
    verse = cycle === 'A' ? "Ev. Mateus" : cycle === 'B' ? "Ev. Marcos" : "Ev. Lucas";

    return { color, season, week, verse, cycle };
}
