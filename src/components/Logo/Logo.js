import React from 'react';

const normal = { fontSize: '32px', color: '#eee', opacity: 0.7 }
const small = { fontSize: '20px', color: '#eee', opacity: 0.7 }

export const Logo = (props) => (
  <div style={props.small ? small : normal}>
    LofiSound
  </div>
);

