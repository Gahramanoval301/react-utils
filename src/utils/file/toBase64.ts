
/**
 * Converts a File object to a base64 encoded data URL string
 * 
 * @param {File} file - The File object to convert (from file input or drag-and-drop)
 * @returns {Promise<string>} A Promise that:
 *   - Resolves with the base64 data URL string (format: "data:[mime-type];base64,...")
 *   - Rejects with any FileReader error
 * 
 * @example
 * // Usage example:
 * const fileInput = document.querySelector('input[type="file"]');
 * const file = fileInput.files[0];
 * toBase64(file)
 *   .then(base64 => console.log('Base64:', base64))
 *   .catch(err => console.error('Error:', err));
 */
export function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // Create a new FileReader instance
    const reader = new FileReader();
    
    // Convert file to data URL (base64 encoded)
    reader.readAsDataURL(file);
    
    // Success handler - resolves with base64 string
    reader.onload = () => {
      // The result property contains the base64 data URL
      resolve(reader.result as string);
    };
    
    // Error handler - rejects with error
    reader.onerror = (error) => {
      reject(error);
    };
  });
}
