import React from 'react';
//(Y: izquierda abajo Y: izquierda arriba, ancho total Y: derecha arriba )
//(Ancho en X, Bottom de X derecha, Bottom de izquierda)

export const FondoAzul = () => {
  return (
    <div
      style={{
        backgroundColor: '#090972',
        height: '30vh',
        width: '100vw',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 55%, 0% 57%)'
      }}
    />
  );
};

