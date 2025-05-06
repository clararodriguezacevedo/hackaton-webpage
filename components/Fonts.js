import { 
  Montserrat, 
  Roboto, 
  Sora, 
  Nunito, 
  Pixelify_Sans,
  Alfa_Slab_One 
} from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunito',
  display: 'swap',
});

export const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
  display: 'swap',
});

export const alfaSlab = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alfa',
  display: 'swap',
});


export const fontVariables = `
  ${montserrat.variable} 
  ${roboto.variable} 
  ${sora.variable} 
  ${nunito.variable} 
  ${pixelify.variable} 
  ${alfaSlab.variable}
`;
