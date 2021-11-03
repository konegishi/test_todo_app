import { Auth } from '@supabase/ui';
import { supabase } from '../lib/supabase';
import '../assets/tailwind.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  );
}

export default MyApp;
