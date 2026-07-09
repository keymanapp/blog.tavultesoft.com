type RedirectFunction = (matches: RegExpMatchArray) => string;
interface ShortURL { match: string|RegExp; redirect: string|RedirectFunction; usePage?: boolean };

export const shortURLs: ShortURL[] = [

  // Redirect posts to https://blog.keyman.com
  {
    match: /^(\d\d\d\d)\/(\d\d)\/(.*)\.html$/i,
    redirect: (matches: RegExpMatchArray): string => `https://blog.keyman.com/${matches[1]}/${matches[2]}/${matches[3]}`
  },

  // Redirect categories to https://blog.keyman.com
  {
    match: /^(using-keyman-desktop|amharic|android|developing-keyboards|developing-keyman|keyman-for-android|keyman-for-ipad|keyman-for-iphone|keymanweb|travel|using-keyman-desktop|webtech)/,
    redirect: (matches: RegExpMatchArray): string => `https://blog.keyman.com/category/${matches[1]}/`
  },

  // Redirect everything else to https://blog.keyman.com/ root
  {
    match: /.*/,
    redirect: 'https://blog.keyman.com/'
  },
];
