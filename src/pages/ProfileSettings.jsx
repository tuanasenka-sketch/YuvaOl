import { useState } from 'react';

export default function ProfileSettings() {
  const [saveState, setSaveState] = useState('idle');

  const handleSave = () => {
    if (saveState !== 'idle') return;
    setSaveState('saving');
    setTimeout(() => {
      setSaveState('saved');
      setTimeout(() => {
        setSaveState('idle');
      }, 2000);
    }, 600);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <main style={{ flex: '1' }}>
        <h2 style={{ marginBottom: '2rem' }}>Profil Bilgilerim</h2>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Ad</label>
                <input type="text" className="input-field" defaultValue="Tuana" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Soyad</label>
                <input type="text" className="input-field" defaultValue="" />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Telefon</label>
              <input type="tel" className="input-field" defaultValue="0555 555 5555" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Adres</label>
              <textarea className="input-field" rows="3" defaultValue="İstanbul, Türkiye"></textarea>
            </div>
            <button 
              type="button" 
              className="btn btn-primary" 
              style={{ 
                width: 'fit-content', 
                background: saveState === 'saved' ? 'var(--success)' : '',
                transition: 'all 0.3s'
              }}
              onClick={handleSave}
            >
              {saveState === 'idle' && "Kaydet"}
              {saveState === 'saving' && "Kaydediliyor..."}
              {saveState === 'saved' && "✔ Başarıyla Kaydedildi"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
