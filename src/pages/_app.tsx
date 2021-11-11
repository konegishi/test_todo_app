import { AppProps } from 'next/app';
import { Auth } from '@supabase/ui';
import { supabase } from '../lib/supabase';
import '../assets/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  );
}

export default MyApp;
