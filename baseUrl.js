// export const baseUrl = 'https://customer-pannel.clubcard.gr/api'
// export const baseUrl = 'https://alamin-dev.dzav2tnn6oyqn.amplifyapp.com/api'
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side code
    return `${window.location.protocol}//${window.location.host}/api`;
  }
  // Server-side code
  return 'http://localhost:3000/api'; // Or your default server-side URL
};

export const baseUrl = getBaseUrl();
