// types/types.ts (if you want to define the property type in a separate file)
export interface Property {
  id: string;  // Or number, depending on your API response
  title: string;
  description: string;
  imageUrl: string;
  // Add more fields as per the API response
}