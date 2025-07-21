/**
 * Shortens large numbers by converting to abbreviated format (e.g., 1500 → "1K")
 * @param _count - The number to shorten
 * @returns String with "M" suffix for millions, "K" suffix for thousands, 
 *          or original number for values under 1000
 */
export const shortenNumber = (_count: number) => {
  // Convert input to integer (handles potential undefined/null)
  let count = parseInt(_count?.toString());
  
  // Format based on magnitude
  if (count > 1000000) {
    return (count / 1000000).toFixed(0) + "M"; // Millions
  } else if (count > 1000) {
    return (count / 1000).toFixed(0) + "K"; // Thousands
  } else {
    return count; // Return original number if under 1000
  }
};
