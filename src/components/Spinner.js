import React from 'react';

import css from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={css.flexRow}>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '20px', fontSize: '2rem' }}>Carregando...</div>
    </div>
  );
}
