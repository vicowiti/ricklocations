export const timeConverter = (isoString: string) => {
  // Create a Date object
  const date = new Date(isoString);

  // Get the local time offset in minutes
  const offsetMinutes = date.getTimezoneOffset();

  // Adjust the time by the offset
  const localTime = new Date(date.getTime() - (offsetMinutes * 60000));

  // Return the local time 
  return localTime.toLocaleString();
}