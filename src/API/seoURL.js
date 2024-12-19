export function seoURL(string) {
    // Convert the string to lowercase
    string = string.toLowerCase();
  
    // Replace spaces with dashes and remove special characters
    string = string.replace(/[^a-z0-9\s-]/g, '');  // Remove unwanted characters
    string = string.replace(/\s+/g, '-');          // Replace spaces with dashes
    string = string.replace(/-+/g, '-');           // Replace multiple dashes with a single dash
  
    // Trim dashes from start and end
    string = string.replace(/^-+|-+$/g, '');
  
    return string;
  }