import { PropsWithChildren, createContext, useContext } from 'react';

const canvasContext = createContext(false);

export const CanvasProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <canvasContext.Provider value={true}>{children}</canvasContext.Provider>
  );
};

export const useIsCanvas = () => {
  return useContext(canvasContext);
};
