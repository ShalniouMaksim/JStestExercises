import { eachDayOfInterval } from 'date-fns';
import { formatWithOptions } from 'date-fns/fp';
import { eo } from 'date-fns/locale';

export default function normalizeData(dateArr, datebegin, dateend) {
  const dateToString = formatWithOptions({ locale: eo }, 'dd.MM.yyyy');
  const dates = eachDayOfInterval({
    start: new Date(datebegin),
    end: new Date(dateend),
  });

  const toUpper = arg => String(arg).toUpperCase();
  const dateObj = dates.map(dateToString).map(toUpper);
  return dateObj.map(value => ({
    value:
      (dateArr.find(date => value === date.date)
        && dateArr.find(date => value === date.date).value)
      || 0,
    date: value,
  }));
}
