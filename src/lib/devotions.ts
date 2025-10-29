
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

// --- Liturgical Calendar Logic ---

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDayOfYear = (date: Date): number => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
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
    const dayOfWeek = christmas.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    const fourthSundayOfAdvent = addDays(christmas, daysUntilSunday - 7);
    return addDays(fourthSundayOfAdvent, -21);
};

const getLiturgicalYearCycle = (date: Date): { year: number; cycle: 'A' | 'B' | 'C' } => {
    const year = date.getFullYear();
    const firstSundayOfAdventCurrent = getFirstSundayOfAdvent(year);
    let liturgicalYearStart = year;

    if (date < firstSundayOfAdventCurrent) {
        liturgicalYearStart = year - 1;
    }

    const cycleIndex = liturgicalYearStart % 3;
    const cycle = cycleIndex === 0 ? 'C' : cycleIndex === 1 ? 'A' : 'B';
    return { year: liturgicalYearStart, cycle };
}

export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getFullYear();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const { year: liturgicalYearNumber, cycle } = getLiturgicalYearCycle(today);

    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
    const christTheKing = addDays(firstSundayOfAdvent, -7);
    
    let nextYearFirstSundayOfAdvent = getFirstSundayOfAdvent(year + 1);
    if(nextYearFirstSundayOfAdvent <= christTheKing) {
      nextYearFirstSundayOfAdvent = new Date(year + 1, 11, 31); // Ensure it's in the next year
    }
    
    const baptismOfTheLord = (() => {
        const epiphanySunday = new Date(year, 0, 6);
        const dayOfWeek = epiphanySunday.getDay();
        let baptismDate = addDays(epiphanySunday, 7 - dayOfWeek); // Sunday after Epiphany
        if (epiphanySunday.getDate() >= 7 && epiphanySunday.getDay() === 0) {
            baptismDate = addDays(epiphanySunday, 1); // Monday after Epiphany if Epiphany is on Jan 7/8
        }
        return baptismDate;
    })();

    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
    let week = 0;
    let verse = "Ex: Lc 10, 1-9";

    // Advent
    if (today >= firstSundayOfAdvent && today < new Date(year, 11, 25)) {
        season = 'Advento';
        color = 'purple';
        const daysIntoAdvent = Math.floor((today.getTime() - firstSundayOfAdvent.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoAdvent / 7) + 1;
        if (week === 3) color = 'rose'; // Gaudete Sunday
        verse = "Ex: Mc 1, 1-8";
    }
    // Christmas
    else if ((today >= new Date(year, 11, 25) && today <= new Date(year, 11, 31)) || today <= baptismOfTheLord) {
        season = 'Tempo do Natal';
        color = 'white';
        week = 1; // Simplified week for Christmas
        verse = "Ex: Jo 1, 1-18";
    }
    // Lent
    else if (today >= ashWednesday && today < easter) {
        season = 'Quaresma';
        color = 'purple';
        const daysIntoLent = Math.floor((today.getTime() - ashWednesday.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoLent / 7) + 1;
        if (week === 4) color = 'rose'; // Laetare Sunday
        verse = "Ex: Mt 4, 1-11";
    }
    // Easter
    else if (today >= easter && today <= pentecost) {
        season = 'Tempo Pascal';
        color = 'white';
        const daysIntoEaster = Math.floor((today.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24));
        week = Math.floor(daysIntoEaster / 7) + 1;
        verse = "Ex: Jo 20, 19-31";
    }
    // Ordinary Time
    else {
        season = 'Tempo Comum';
        color = 'green';
        const dayOfYear = getDayOfYear(today);
        
        let baseDayOfYear;
        if (today > pentecost) { // Second part of Ordinary Time
            baseDayOfYear = getDayOfYear(pentecost);
            const daysSincePentecost = dayOfYear - baseDayOfYear;
            const weekOfPentecost = Math.floor((baseDayOfYear - getDayOfYear(baptismOfTheLord)) / 7);
            const weeksInLentAndEaster = Math.ceil((getDayOfYear(pentecost) - getDayOfYear(ashWednesday)) / 7);
            week = 34 - Math.floor((getDayOfYear(nextYearFirstSundayOfAdvent) - dayOfYear) / 7);
        } else { // First part of Ordinary Time
            baseDayOfYear = getDayOfYear(baptismOfTheLord);
            const daysSinceBaptism = dayOfYear - baseDayOfYear;
            week = Math.floor(daysSinceBaptism / 7) + 1;
        }

        verse = cycle === 'A' ? "Evangelho: Mateus" : cycle === 'B' ? "Evangelho: Marcos" : "Evangelho: Lucas";
    }
    
    // Override for specific solemnities/feasts
    const month = today.getMonth();
    const dayOfMonth = today.getDate();

    if (month === 10 && dayOfMonth === 1) { // All Saints
        season = 'Solenidade de Todos os Santos';
        color = 'white';
    } else if (today.getTime() === pentecost.getTime() || (month === 8 && dayOfMonth === 14) || today.getDay() === 0 && season === 'Tempo Pascal' && week === 8 /* Pentecost Sunday is the 8th Sunday of Easter */) {
        season = 'Pentecostes';
        color = 'red';
    } else if (today.getTime() === christTheKing.getTime()) {
        season = 'Solenidade de Cristo Rei';
        color = 'white';
    } else if (today >= addDays(easter, 57) && today <= addDays(easter, 63)) { // Trinity Sunday
        season = 'Santíssima Trindade';
        color = 'white';
    } else if (today >= addDays(easter, 64) && today <= addDays(easter, 70)) { // Corpus Christi
        season = 'Corpus Christi';
        color = 'white';
    }
    
    return { color, season, week, verse, cycle };
}
