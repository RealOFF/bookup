export const timestampToDateString = (timestamp: number) =>
  new Intl.DateTimeFormat(
    'en-GB',
    { dateStyle: 'medium', timeStyle: 'short' }
  ).format(new Date(timestamp))

export const timestampToTimeString = (timestamp) =>
  new Intl.DateTimeFormat(
    'en-GB',
    { timeStyle: 'short' }
  ).format(new Date(timestamp))
