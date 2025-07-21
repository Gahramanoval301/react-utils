/**
 * Converts file size from bytes to kilobytes
 * @param file - The File object to get size from
 * @returns String representation of size in KB with 1 decimal place
 */
export function toKb(file: File) {
  return (file.size / 1024).toFixed(1);
}