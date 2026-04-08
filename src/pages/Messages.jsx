import { useState, useRef, useEffect } from 'react';
import { Send, Search, MoreVertical, Phone, Video, Search as SearchIcon, User } from 'lucide-react';
import { mockConversations } from '../data/mockData';

export default function Messages() {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeId, setActiveId] = useState(mockConversations[0].id);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef(null);

  const filteredConversations = conversations.filter(conv => 
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeChat = conversations.find(c => c.id === activeId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === activeId) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: inputText,
          time: "Şimdi"
        };
      }
      return conv;
    }));

    setInputText("");
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', height: 'calc(100vh - 120px)' }}>
      <div className="glass-panel" style={{ 
        display: 'flex', 
        height: '100%', 
        overflow: 'hidden', 
        padding: 0,
        borderRadius: '24px'
      }}>
        {/* Sidebar - Conversations List */}
        <aside style={{ 
          width: '350px', 
          borderRight: '1px solid var(--glass-border)', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'rgba(255,255,255,0.02)'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>İlan Sahipleri</h2>
            <div style={{ position: 'relative' }}>
              <SearchIcon size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="İlan sahibi ara..." 
                style={{ paddingLeft: '2.8rem', width: '100%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}
              />
            </div>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
            {filteredConversations.length > 0 ? (
              filteredConversations.map(conv => (
                <div 
                  key={conv.id} 
                  onClick={() => setActiveId(conv.id)}
                  className="hover-scale"
                  style={{ 
                    padding: '1rem', 
                    borderRadius: '16px', 
                    cursor: 'pointer',
                    marginBottom: '0.5rem',
                    background: activeId === conv.id ? 'var(--accent-primary-glass)' : 'transparent',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                    border: activeId === conv.id ? '1px solid var(--accent-primary)' : '1px solid transparent'
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      background: 'var(--glass-border)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      color: 'var(--text-primary)'
                    }}>
                      {conv.user.avatar}
                    </div>
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '2px', 
                      right: '2px', 
                      width: '12px', 
                      height: '12px', 
                      background: conv.user.status === 'online' ? '#4CAF50' : '#9E9E9E', 
                      borderRadius: '50%',
                      border: '2px solid white'
                    }} />
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{conv.user.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{conv.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.65rem', background: 'var(--accent-primary-glass)', color: 'var(--accent-primary)', padding: '1px 6px', borderRadius: '4px', fontWeight: 'bold' }}>İLAN SAHİBİ</span>
                    </div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap' 
                    }}>
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <p>İlan sahibi bulunamadı.</p>
              </div>
            )}
          </div>
        </aside>

        {/* Chat Window */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
          {/* Chat Header */}
          <header style={{ 
            padding: '1rem 2rem', 
            borderBottom: '1px solid var(--glass-border)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: 'rgba(255,255,255,0.01)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {activeChat.user.avatar}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{activeChat.user.name}</h3>
                  <span style={{ fontSize: '0.6rem', background: 'var(--accent-primary)', color: 'white', padding: '1px 6px', borderRadius: '4px', fontWeight: 'bold' }}>İLAN SAHİBİ</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: activeChat.user.status === 'online' ? '#4CAF50' : 'var(--text-secondary)' }}>
                  {activeChat.user.status === 'online' ? 'Çevrimiçi' : 'Çevrimdışı'}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
              <Phone 
                size={20} 
                className="hover-scale" 
                style={{ cursor: 'pointer' }} 
                onClick={() => alert('Sesli arama özelliği yakında eklenecektir!')} 
              />
              <Video 
                size={20} 
                className="hover-scale" 
                style={{ cursor: 'pointer' }} 
                onClick={() => alert('Görüntülü arama özelliği yakında eklenecektir!')} 
              />
              <MoreVertical 
                size={20} 
                className="hover-scale" 
                style={{ cursor: 'pointer' }} 
                onClick={() => alert('Ayarlar menüsü hazırlık aşamasındadır.')} 
              />
            </div>
          </header>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {activeChat.messages.length > 0 ? (
              activeChat.messages.map(msg => (
                <div 
                  key={msg.id} 
                  className="animate-fade-in"
                  style={{ 
                    alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'me' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{ 
                    background: msg.sender === 'me' ? 'var(--accent-primary)' : 'var(--glass-bg)',
                    color: msg.sender === 'me' ? 'white' : 'var(--text-primary)',
                    padding: '1rem 1.25rem',
                    borderRadius: msg.sender === 'me' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    fontSize: '0.95rem',
                    lineHeight: '1.4'
                  }}>
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    {msg.time}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', gap: '1rem', opacity: 0.7 }}>
                <MessageSquare size={48} strokeWidth={1.5} />
                <p style={{ fontSize: '1.1rem' }}>Henüz bir mesajlaşma bulunmuyor.</p>
                <p style={{ fontSize: '0.9rem' }}>İlk mesajı göndererek iletişimi başlatabilirsiniz!</p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <footer style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--glass-border)' }}>
            <form 
              onSubmit={handleSendMessage}
              style={{ 
                display: 'flex', 
                gap: '1rem', 
                background: 'var(--glass-bg)', 
                padding: '0.5rem', 
                borderRadius: '16px',
                border: '1px solid var(--glass-border)'
              }}
            >
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Mesajınızı yazın..." 
                style={{ 
                  flex: 1, 
                  background: 'none', 
                  border: 'none', 
                  padding: '0.5rem 1rem',
                  fontSize: '1rem'
                }}
              />
              <button 
                type="submit" 
                disabled={!inputText.trim()}
                className="btn btn-primary" 
                style={{ 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '12px',
                  opacity: inputText.trim() ? 1 : 0.5
                }}
              >
                <Send size={18} style={{ marginRight: '0.5rem' }} /> Gönder
              </button>
            </form>
          </footer>
        </main>
      </div>
    </div>
  );
}
