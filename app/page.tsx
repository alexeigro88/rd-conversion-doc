'use client';

import { useState } from 'react';

export default function Home() {
  const [activeBlock, setActiveBlock] = useState('hero');
  const [activeTab, setActiveTab] = useState('design');

  const blocks = {
    hero: {
      title: '01 · Hero — первый экран',
      priority: 'critical',
      design: 'Двухколоночный layout с двумя CTA кнопками.',
      analytics: 'Hotjar: 406 кликов на Book a Call / 224 реальных записей.',
      action: 'Добавить вторую кнопку "Get Written Estimate" → /get-estimate форма.'
    },
    brief: {
      title: '07 · Форма брифа — новый блок',
      priority: 'critical',
      design: 'Двухколоночный: левая — объяснение, правая — форма.',
      analytics: '63% людей кликают CTA но не записываются.',
      action: 'Создать /get-estimate страницу с формой.'
    }
  };

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ background: '#10123B', color: '#fff', padding: '24px', textAlign: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '28px', fontWeight: '600' }}>RapidDev Conversion Plan</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '13px', opacity: 0.7 }}>Homepage Optimization Strategy</p>
      </div>

      <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Сессий / мес', value: '110K', color: '#185FA5' },
            { label: 'CTA clicks', value: '1,095', color: '#F59E0B' },
            { label: 'Записей / мес', value: '224', color: '#F4263D' },
            { label: 'Цель', value: '400–500', color: '#16A34A' }
          ].map((m, i) => (
            <div key={i} style={{ padding: '16px', background: '#fff', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: m.color }}>{m.value}</div>
              <div style={{ fontSize: '11px', color: '#9496B5', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '8px', padding: '24px' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#10123B' }}>
            {blocks[activeBlock as keyof typeof blocks].title}
          </h2>

          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #eee', marginBottom: '16px' }}>
            <button
              onClick={() => setActiveTab('design')}
              style={{
                padding: '10px 16px',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'design' ? '#10123B' : '#9496B5',
                borderBottom: activeTab === 'design' ? '2px solid #F4263D' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              Дизайн
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              style={{
                padding: '10px 16px',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'analytics' ? '#10123B' : '#9496B5',
                borderBottom: activeTab === 'analytics' ? '2px solid #F4263D' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              Аналитика
            </button>
          </div>

          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: '0 0 16px 0' }}>
            {activeTab === 'design' ? blocks[activeBlock as keyof typeof blocks].design : blocks[activeBlock as keyof typeof blocks].analytics}
          </p>

          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '12px 14px', borderRadius: '6px', fontSize: '12px', color: '#991B1B' }}>
            <strong>Действие:</strong> {blocks[activeBlock as keyof typeof blocks].action}
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          {['hero', 'brief'].map((block) => (
            <button
              key={block}
              onClick={() => { setActiveBlock(block); setActiveTab('design'); }}
              style={{
                padding: '10px 16px',
                background: activeBlock === block ? '#F4263D' : '#fff',
                color: activeBlock === block ? '#fff' : '#10123B',
                border: '1px solid #eee',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              {block === 'hero' ? 'Hero' : 'Форма брифа'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
