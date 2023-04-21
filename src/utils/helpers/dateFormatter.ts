import moment from 'moment';

const ISO_DATE = 'YYYY-MM-DDTHH:mm:ss';
const SCREEN_DATE = 'DD/MM/YYYY';
const SHORT_DATE = 'DD/MM/YYYY';
const LONG_DATE = 'D [de] MMMM';
const HOUR_MINUTE = 'HH:mm';
const SHORT_DATE_HOUR_MINUTE = 'DD/MM/YYYY [às] HH:mm';

export const WEEKEND_DAYS = ['Sab', 'Dom'];
export const WEEK_DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', ...WEEKEND_DAYS];

moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  weekdays: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
});

export const formatToScreenDate = (date: Date): string =>
  moment.utc(date, ISO_DATE).format(SCREEN_DATE);

export const formatScreenDateToISO = (date: Date): string =>
  moment.utc(date, SHORT_DATE).format(ISO_DATE);

export const formatShortDate = (date: Date): string =>
  moment.utc(date).format(SHORT_DATE);

export const formatLongDate = (date: Date): string =>
  moment.utc(date).format(LONG_DATE);

export const formatHourMinuteDate = (date: Date): string =>
  moment(date).format(HOUR_MINUTE);

export const formatTimestampToDate = (timestamp: number): string =>
  moment.unix(timestamp).format(SHORT_DATE_HOUR_MINUTE);
