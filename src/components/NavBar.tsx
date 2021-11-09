import React from 'react';
import { supabase } from '../lib/supabase';

/**
 * NavBarのProps
 */
interface NavBarProps {
  isTransparent?: boolean;
}

/**
 * 指標ごとのカードコンポーネント
 * @param props NavBarのProps
 * @returns NavBarコンポーネント
 */
const NavBar: React.FC<NavBarProps> = () => {
  return (
    <React.Fragment>
      <nav className='bg-white shadow top-0 left-0 right-0'>
        <div className='container px-4 py-2 mx-auto'>
          <div className='flex items-center justify-between'>
            <span>ToDo Apps</span>
            <div className='flex'>
              <button
                className='fas fa-sign-out-alt h-5 w-5 ml-auto mr-2 text-gray-400'
                onClick={async () => {
                  const { error } = await supabase.auth.signOut();
                  // eslint-disable-next-line no-console
                  if (error) console.log('Error logging out:', error.message);
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
