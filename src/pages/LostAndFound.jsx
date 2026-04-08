import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, CheckCircle2, MessageSquare, X } from 'lucide-react';
import { mockLostFound } from '../data/mockData';

export default function LostAndFound() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [reports, setReports] = useState({}); // Stores report info by ID
  const [isSuccess, setIsSuccess] = useState(false);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get('foundLocation');
    
    setReports(prev => ({
      ...prev,
      [selectedAnimal.id]: {
        location,
        timestamp: new Date().toLocaleTimeString(),
        hasPhoto: true // Simulated
      }
    }));
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedAnimal(null);
    }, 2000);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--warning)', fontSize: '2.5rem', marginBottom: '1rem' }}>Kayıp & Bulunan</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Kaybolan dostlarımızı birlikte bulalım, bulanlara teşekkür edelim.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {mockLostFound.map(item => {
          const isReported = reports[item.id];
          return (
            <div key={item.id} className="glass-panel" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              position: 'relative'
            }}>
              {item.type === 'Kayıp' && !isReported && (
                <button 
                  onClick={() => setSelectedAnimal(item)}
                  className="btn btn-warning"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 10,
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    boxShadow: '0 8px 16px rgba(255, 152, 0, 0.3)'
                  }}
                >
                  Ben Buldum!
                </button>
              )}

              {isReported && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  background: 'rgba(76, 175, 80, 0.9)',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  animation: 'scale-in 0.3s ease'
                }}>
                  <CheckCircle2 size={16} /> Bildirim Gönderildi
                </div>
              )}

              <img src={item.image} alt={item.animalType} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: item.type === 'Kayıp' ? 'var(--danger-glass)' : 'var(--success-glass)',
                    color: item.type === 'Kayıp' ? 'var(--danger)' : 'var(--success)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {item.type}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>

                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.animalType}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', minHeight: '3rem' }}>
                  "{item.description}"
                </p>

                <div style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '1rem', 
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>İletişim</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>{item.contactName}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Report Modal */}
      {selectedAnimal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} className="animate-fade-in">
          <div className="glass-panel" style={{ 
            width: '100%', 
            maxWidth: '500px', 
            padding: '2rem',
            position: 'relative',
            animation: 'scale-in 0.3s ease'
          }}>
            {!isSuccess ? (
              <>
                <button 
                  onClick={() => setSelectedAnimal(null)}
                  style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>

                <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Buldunuz mu? ✨</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  Bu dostumuza kavuşması için yardımcı olduğunuzdan dolayı teşekkür ederiz. Lütfen nerede bulduğunuzu belirtin.
                </p>

                <form onSubmit={handleReportSubmit}>
                  <div className="form-group">
                    <label>Tam Konum veya Detaylı Adres</label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--accent-primary)' }} />
                      <textarea 
                        name="foundLocation"
                        required
                        placeholder="Örn: Bebek Parkı arkasındaki sokakta görüldü..."
                        style={{ paddingLeft: '3rem', width: '100%', minHeight: '100px' }}
                      ></textarea>
                    </div>
                  </div>

                  <div style={{ 
                    marginBottom: '2rem', 
                    padding: '1.5rem', 
                    border: '2px dashed var(--glass-border)', 
                    borderRadius: '15px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: 'var(--glass-bg)',
                    transition: 'all 0.3s ease'
                  }} className="hover-scale">
                    <Camera size={32} color="var(--accent-primary)" style={{ marginBottom: '0.5rem' }} />
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Fotoğraf ekle (isteğe bağlı)</p>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Bildirimi Gönder
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--success)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  animation: 'scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  <CheckCircle2 size={48} />
                </div>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Harikasınız!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>İlan sahibine bildiriminiz iletildi. En kısa sürede sizinle iletişime geçecekler.</p>
                <button className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.8rem 1.5rem' }} onClick={() => setSelectedAnimal(null)}>
                  Kapat
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
