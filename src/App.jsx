import React, { useState, useEffect } from 'react';

function SparkButton({ children, onClick }){
  return (
    <button className="spark-btn" onClick={onClick}>{children}</button>
  );
}

export default function App(){
  const [open, setOpen] = useState(true);

  useEffect(()=>{
    const el = document.getElementById('react-root');
    if(el) el.classList.add('in');
  }, []);

  return (
    <div className={"react-card " + (open? 'open':'closed')}>
      <div className="rc-head">
        <div>
          <div className="rc-name">Waqas Ali</div>
          <div className="rc-role">AI Engineer — Production ML & CV</div>
        </div>
        <div className="rc-controls">
          <button className="rc-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle">{open? '✕' : '▣'}</button>
        </div>
      </div>

      <div className="rc-body">
        <p className="rc-intro">I build systems that see, learn, and decide — focused on fast inference and maintainable pipelines.</p>
        <div className="rc-ctas">
          <SparkButton onClick={()=>window.showPage && window.showPage('work')}>View Work</SparkButton>
          <SparkButton onClick={()=>window.showPage && window.showPage('info')}>About</SparkButton>
          <a className="rc-link" href="https://github.com/waqasali-tech" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="rc-footer">UMT · Class of 2027 · Lahore</div>
    </div>
  );
}
