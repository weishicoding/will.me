/**
 * Utility function to format the date according to the given format
 * @param date - The date to format
 * @param format - The desired format string
 * @returns Formatted date string
 *
 * Supported format tokens:
 * - YYYY: Full year (e.g., 2024)
 * - YY: Last two digits of the year (e.g., 24)
 * - MMMM: Full month name (e.g., April)
 * - MMM: Short month name (e.g., Apr)
 * - MM: Two-digit month (01-12)
 * - M: Month (1-12)
 * - DD: Two-digit day of the month (01-31)
 * - D: Day of the month (1-31)
 * - Do: Day of the month with ordinal suffix (1st, 2nd, 3rd, etc.)
 *
 * Examples:
 * - 'MM/DD/YYYY' -> "04/19/2024"
 * - 'D MMM, YYYY' -> "19 Apr, 2024"
 * - 'Do MMMM, YYYY' -> "19th April, 2024"
 */
export const formatDate = (date: Date, format: string): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-based month
  const year = date.getFullYear();
  const monthFull = new Date(date).toLocaleString('en-US', {month: 'long'});
  const monthShort = new Date(date).toLocaleString('en-US', {month: 'short'});

  return format
    .replace('YYYY', year.toString())
    .replace('YY', year.toString().slice(-2))
    .replace('MMMM', monthFull)
    .replace('MMM', monthShort)
    .replace('MM', month.toString().padStart(2, '0'))
    .replace('M', month.toString())
    .replace('Do', `${day}${getDaySuffix(day)}`)
    .replace('DD', day.toString().padStart(2, '0'))
    .replace('D', day.toString());
};

/**
 * Helper function to get the correct day suffix
 * @param day - The day of the month
 * @returns The appropriate suffix for the day
 */
const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
