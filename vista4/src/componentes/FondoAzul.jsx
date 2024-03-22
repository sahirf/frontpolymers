import React from 'react';
//(Y: izquierda abajo Y: izquierda arriba, ancho total Y: derecha arriba )
//(Ancho en X, Bottom de X derecha, Bottom de izquierda)

export const FondoAzul = () => {
  return (
    <div
      style={{
        backgroundColor: '#0e0e8a',
        height: '100vh',
        width: '100vw',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 0% 57%)'
      }}
    />
  );
};

