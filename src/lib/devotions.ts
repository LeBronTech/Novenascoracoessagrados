

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
    '12-21': 'Lucas 1, 26-38',
    '12-22': 'Lucas 1, 39-45',
    '12-23': 'Lucas 1, 57-66',
    '12-24': 'Lucas 1, 67-79', // Morning
    '12-24-night': 'Lucas 2, 1-14',
    '12-25': 'João 1, 1-18', // Christmas Day
    '12-26': 'Mateus 10, 17-22', // St. Stephen
    '12-27': 'João 20, 2-8', // St. John the Apostle
    '12-28': 'Lucas 2, 22-40', // Holy Family
    '12-29': 'Lucas 2, 22-35',
    '12-30': 'Lucas 2, 36-40',
    '12-31': 'João 1, 1-18',
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
    const daysToSubtract = dayOfWeek + 21; // 3 full weeks before Christmas week's Sunday
    return addDays(christmas, -daysToSubtract);
};

const getLiturgicalYearCycle = (date: Date): { year: number; cycle: 'A' | 'B' | 'C' } => {
    const year = date.getUTCFullYear();
    const firstSundayOfAdventCurrentYear = getFirstSundayOfAdvent(year);
    
    // Determine the liturgical year we are in. It starts with Advent.
    const liturgicalYearStartYear = date >= firstSundayOfAdventCurrentYear ? year : year - 1;

    // Anchor point: The liturgical year starting in Advent 2024 is Year C.
    // 2024 % 3 = 1 -> Year C
    // 2025 % 3 = 2 -> Year A
    // 2026 % 3 = 0 -> Year B
    // Correct mapping should be based on a known cycle start.
    // Year A starts on Advent 2022. 2022+1 = 2023. 2023 % 3 = 2
    // Let's use a simpler anchor. Advent 2023 started the 2024 Liturgical Year, which is Year B.
    // Advent 2024 starts the 2025 Liturgical Year, which is Year C.
    // Advent 2025 starts the 2026 Liturgical Year, which is Year A.

    const yearNumberForCycle = liturgicalYearStartYear + 1;

    let cycle: 'A' | 'B' | 'C';
    switch (yearNumberForCycle % 3) {
        case 1: // e.g., 2023 (Advent 2022). 2026 (Advent 2025). This is Year A.
            cycle = 'A';
            break;
        case 2: // e.g., 2024 (Advent 2023). This is Year B.
            cycle = 'B';
            break;
        case 0: // e.g., 2025 (Advent 2024). This is Year C.
            cycle = 'C';
            break;
        default: // Should not happen
            cycle = 'A';
            break;
    }
    
    return { year: liturgicalYearStartYear, cycle };
}

function isSameDay(d1: Date, d2: Date) {
    if (!d1 || !d2) return false;
    return d1.getUTCFullYear() === d2.getUTCFullYear() &&
           d1.getUTCMonth() === d2.getUTCMonth() &&
           d1.getUTCDate() === d2.getUTCDate();
}

export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getUTCFullYear();
    const today = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    const { cycle } = getLiturgicalYearCycle(today);
    
    const easter = getEaster(year);
    const ashWednesday = addDays(easter, -46);
    const pentecost = addDays(easter, 49);
    
    const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
    const christmas = new Date(Date.UTC(year, 11, 25));
    const baptismOfTheLordDate = new Date(Date.UTC(year, 0, 6));
    const baptismOfTheLord = addDays(baptismOfTheLordDate, (7 - baptismOfTheLordDate.getUTCDay()) % 7);

    // 1. Determine the Liturgical Season and its base color
    let color: LiturgicalInfo['color'] = 'green';
    let season = 'Tempo Comum';
        
    if (today >= firstSundayOfAdvent && today < new Date(Date.UTC(year, 11, 24))) {
        season = 'Advento';
        color = 'purple';
    } else if (today >= christmas || today < baptismOfTheLord) {
        // Handle year wrap for Christmas season
        const christmasStart = new Date(Date.UTC(year - 1, 11, 25));
        const baptismEndPrevYear = addDays(new Date(Date.UTC(year-1, 0, 6)), (7-new Date(Date.UTC(year-1, 0, 6)).getUTCDay()) % 7);

        if (today >= christmas || (today.getFullYear() === year && today < baptismOfTheLord) ) {
            season = 'Natal';
            color = 'white';
        }
    } else if (today >= ashWednesday && today < easter) {
        season = 'Quaresma';
        color = 'purple';
    } else if (today >= easter && today <= pentecost) {
        season = 'Páscoa';
        color = 'white';
    }

    // 2. Override with Feast/Solemnity colors
    const month = today.getUTCMonth() + 1;
    const dayOfMonth = today.getUTCDate();
    const dayKey = `${month}-${dayOfMonth}`;

    // WHITE FEASTS (override green/purple)
    const whiteFeasts = [
        '1-1', // Mary, Mother of God
        '2-2', // Presentation of the Lord
        '3-19', // St. Joseph
        '3-25', // Annunciation
        '6-24', // Nativity of St. John the Baptist
        '8-6', // Transfiguration
        '8-15', // Assumption
        '10-1', // St. Therese (Doctor)
        '10-4', // St. Francis of Assisi
        '10-7', // Our Lady of the Rosary
        '11-1', // All Saints
        '11-9', // Dedication of Lateran Basilica
        '11-10',// St. Leo the Great
        '11-11',// St. Martin of Tours
        '11-17', // St. Elizabeth of Hungary
        '11-21', // Presentation of Mary
        '11-27', // Our Lady of the Miraculous Medal
        '12-8', // Immaculate Conception
        '12-27' // St. John the Apostle
    ];
    if (whiteFeasts.includes(dayKey)) {
        color = 'white';
    }
    const christTheKing = addDays(firstSundayOfAdvent, -7);
    const trinitySunday = addDays(pentecost, 7);
    const corpusChristi = addDays(pentecost, 11);
    if (isSameDay(today, trinitySunday) || isSameDay(today, corpusChristi) || isSameDay(today, christTheKing)) {
        color = 'white';
    }

    // RED FEASTS (override green/purple/white)
    const redFeasts = [
        '2-22', // Chair of St. Peter
        '4-25', // St. Mark
        '5-3', // Sts. Philip and James
        '5-14', // St. Matthias
        '6-29', // Sts. Peter and Paul
        '7-3', // St. Thomas
        '7-25', // St. James
        '8-24', // St. Bartholomew
        '8-29', // Passion of St. John the Baptist
        '9-21', // St. Matthew
        '10-18', // St. Luke
        '10-28', // Sts. Simon and Jude
        '11-12', // St. Josaphat
        '11-22', // St. Cecilia
        '11-24', // Vietnamese Martyrs
        '11-30', // St. Andrew
        '12-26' // St. Stephen
    ];
    const palmSunday = addDays(easter, -7);
    const goodFriday = addDays(easter, -2);
    if (redFeasts.includes(dayKey) || isSameDay(today, palmSunday) || isSameDay(today, goodFriday) || isSameDay(today, pentecost)) {
        color = 'red';
    }
    
    // ROSE SUNDAYS (override purple)
    const thirdSundayAdvent = addDays(firstSundayOfAdvent, 14);
    const fourthSundayLent = addDays(ashWednesday, 25);
    if (isSameDay(today, thirdSundayAdvent) || isSameDay(today, fourthSundayLent)) {
        color = 'rose';
    }

    // PURPLE for All Souls (overrides green)
    if (month === 11 && dayOfMonth === 2) { 
        color = 'purple'; 
        season = 'Fiéis Defuntos'; 
    }

    let verseKey = `${month}-${dayOfMonth}`;
    if (month === 12 && dayOfMonth === 24 && date.getUTCHours() >= 18) {
      verseKey = '12-24-night';
    }
    
    let verse = dailyGospels[verseKey] || `Ev. do Dia`;

    // Adjust season name for specific feasts
    let finalSeasonText = season;
    if (dayKey === '11-1') finalSeasonText = 'Todos os Santos';
    if (dayKey === '11-9') finalSeasonText = 'Ded. Bas. de Latrão';
    if (dayKey === '11-21') finalSeasonText = 'Apres. de N. Senhora';
    if (isSameDay(today, christTheKing)) finalSeasonText = 'Cristo Rei';
    if (dayKey === '12-8') finalSeasonText = 'Imaculada Conceição';


    return { color, season: finalSeasonText, verse, cycle };
}
