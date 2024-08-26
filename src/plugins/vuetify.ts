import 'vuetify/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    dark: '#081F32',
    background3: '#FFFFFF',
    background2: '#F1F5F5',
    background: '#FCFCFC',
    primary: '#11555F', // p-100
    'primary-dark': '#020620', // p-dark-50
    'primary-lighten-1': '#1C213A', // p-90
    'primary-lighten-2': '#353950', // p-80
    'primary-lighten-3': '#4F5266', // p-70
    'primary-lighten-4': '#686B7C', // p-60
    'primary-lighten-5': '#818392', // p-50
    'primary-lighten-6': '#9A9CA7', // p-40
    'primary-lighten-7': '#B3B5BD', // p-30
    'primary-lighten-8': '#CDCED3', // p-20
    'primary-lighten-0': '#E6E6E9', // p-10
    secondary: '#DFF9FD', // secondary 100
    'secondary-lighten-1': '#ADEFF9', // secondary 300
    'secondary-lighten-2': '#05DBF2', // secondary 500
    'secondary-lighten-3': '#00B9D6', // secondary 700
    'secondary-lighten-4': '#081F32', // secondary 900
    error: '#EE201C', // a-100
    'error-lighten-1': '#F25755', // a-75
    'error-lighten-2': '#732626', // a-50
    'error-lighten-3': '#FBC7C6', // a-25
    success: '#1A932E', // s-100
    'success-lighten-0': '#00FFD1', // s-80
    'success-lighten-1': '#53AE62', // s-75
    'success-lighten-2': '#8DC996', // s-50
    'success-lighten-3': '#C6E4CB', // s-25
    info: '#DFF9FD', // info 100
    'info-lighten-1': '#00B9D6', // info 500
    'info-lighten-2': '#004251', // info 800
    warning: '#E65F2B', // w-100
    'warning-lighten-1': '#EC8760', // w-75
    'warning-lighten-2': '#F3AF95', // w-50
    'warning-lighten-3': '#F9D7CA', // w-25
    pink: '#EC008E', // pink 100
    'pink-lighten-1': '#F580C6', // pink 50
  },
};

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
});
