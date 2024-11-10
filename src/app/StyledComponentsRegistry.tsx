import React from 'react';
import { StyleSheetManager } from 'styled-components';  

export const StyledComponentsRegistry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (typeof window !== 'undefined') {
    return <>{children}</>;  
  }

  return <StyleSheetManager>{children}</StyleSheetManager>; 
};
