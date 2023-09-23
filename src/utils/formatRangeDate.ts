import moment from "moment";
interface FormatRangeDateType {
  (date_start: Date | null, date_end?: Date | null): string | null;
}
export const formatRangeDate: FormatRangeDateType = (
  date_start?: Date | null,
  date_end?: Date | null
): string | null => {
  /*
   * Check Date
   *    1. if end date is null, then return format "Y - Present"
   *    2. start date > end data, return null
   *    3. if start year equal end year, then format is "MMM - MMM Y"
   *    4. else start year less than end year, then format is "Y - Y"
   */

  //   end date null
  if (!date_end) {
    return moment(date_start).format("Y - ") + "Present";
  }

  // Convert to moment
  const start = moment(date_start);
  const end = moment(date_end);

  //   get year
  const start_year = start.year();
  const end_year = end.year();

  //   check date
  if (start > end) {
    return null;
  } else if (start_year == end_year) {
    return start.format("MMM - ") + end.format("MMM Y");
  } else {
    return start.format("Y - ") + end.format("Y");
  }
};
