import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

export const FugaContext: React.Context<{
  fuga?: number;
  setFuga?: Dispatch<SetStateAction<number>>;
}> = createContext({});

// interface FugaProviderProps {
//   fuga: number;
//   setFuga: Dispatch<SetStateAction<number>>;
// }

export const FugaProvider: React.FC = (props) => {
  const [fuga, setFuga] = useState(0);

  return (
    <FugaContext.Provider value={{ fuga, setFuga }}>
      {props.children}
    </FugaContext.Provider>
  );
};
