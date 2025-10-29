
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

// --- Liturgical Calendar Logic ---

// Helper to add days to a date
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Calculates Easter Sunday for a given year using the Computus algorithm
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

// Gets the week number of a date within the year
const getWeekOfYear = (date: Date): number => {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = (date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return Math.ceil((day + start.getDay() + 1) / 7);
};

// Gets liturgical data based on the current date
export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getFullYear();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    const firstSundayOfAdvent = (() => {
        const christmas = new Date(year, 11, 25);
        const dayOfWeek = christmas.getDay();
        const daysToSubtract = dayOfWeek === 0 ? 28 : 21 + dayOfWeek;
        return addDays(christmas, -daysToSubtract);
    })();
    const baptismOfTheLord = (() => {
        const epiphany = new Date(year, 0, 6);
        const epiphanyDay = epiphany.getDay();
        const sundayAfterEpiphany = addDays(epiphany, 7 - epiphanyDay);
        // Usually the Sunday after Epiphany, unless Epiphany is Jan 7/8, then it's the next day
        if (epiphany.getDate() > 6 && epiphanyDay === 0) return addDays(epiphany, 1);
        return sundayAfterEpiphany;
    })();

    // Default values
    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
    let week = 0;
    let verse = "Ex: Lc 10, 1-9";

    // Advent
    if (today >= firstSundayOfAdvent && today < new Date(year, 11, 25)) {
        season = 'Advento';
        color = 'purple';
        week = getWeekOfYear(today) - getWeekOfYear(firstSundayOfAdvent) + 1;
        if (getWeekOfYear(today) === getWeekOfYear(addDays(firstSundayOfAdvent, 14)) + 1) { // Gaudete Sunday
            color = 'rose';
        }
        verse = "Ex: Mc 1, 1-8";
    }
    // Christmas Time
    else if (today >= new Date(year, 11, 25) || today <= baptismOfTheLord) {
        const christmasStartYear = today <= baptismOfTheLord ? year - 1 : year;
        season = 'Tempo do Natal';
        color = 'white';
        week = getWeekOfYear(today) - getWeekOfYear(new Date(christmasStartYear, 11, 25)) + 1;
        verse = "Ex: Jo 1, 1-18";
    }
    // Lent
    else if (today >= ashWednesday && today < easter) {
        season = 'Quaresma';
        color = 'purple';
        week = getWeekOfYear(today) - getWeekOfYear(ashWednesday) + 1;
        if (getWeekOfYear(today) === getWeekOfYear(addDays(easter, -21)) -1) { // Laetare Sunday
             color = 'rose';
        }
        verse = "Ex: Mt 4, 1-11";
    }
    // Easter Time
    else if (today >= easter && today <= pentecost) {
        season = 'Tempo Pascal';
        color = 'white';
        week = getWeekOfYear(today) - getWeekOfYear(easter) + 1;
        verse = "Ex: Jo 20, 19-31";
    }
    // Ordinary Time
    else {
        season = 'Tempo Comum';
        color = 'green';
        // Calculate week in Ordinary Time (part 1 or 2)
        if (today > pentecost) {
            week = getWeekOfYear(today) - getWeekOfYear(pentecost);
        } else {
            week = getWeekOfYear(today) - getWeekOfYear(baptismOfTheLord);
        }
        verse = "Ex: Mt 5, 1-12";
    }

    // Override for specific feasts (simplified)
    const month = today.getMonth();
    const dayOfMonth = today.getDate();
    if ((month === 4 && dayOfMonth === 31) || (month === 7 && dayOfMonth === 6)) { // Visitation, Transfiguration
        color = 'white';
    }
    if ((month === 8 && dayOfMonth === 14) || (month === 10 && dayOfMonth === 1)) { // Exaltation of the Cross, All Saints
        color = 'red';
    }
    
    // Final check for Sunday
    if (today.getDay() === 0 && (season === 'Advento' || season === 'Quaresma') && color !== 'rose') {
      color = 'purple';
    }


    return { color, season, week, verse };
}
