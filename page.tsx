'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeBlock, setActiveBlock] = useState('hero');
  const [activeTab, setActiveTab] = useState('design');

  const blocks = {
    hero: {
      title: '01 · Hero — первый экран',
      priority: 'critical',
      design: 'Двухколоночный layout с двумя CTA кнопками. Левая: заголовок + подзаголовок + две кнопки (красная Book a Call + outline Get Written Estimate) + 4 цифры доверия. Правая: услуги со сроками + Clutch-бейдж.',
      analytics: 'Hotjar: 406 кликов Book a Call / 224 реальных записей (55% потеря). About Us кликают в 2.7x чаще — люди ищут информацию перед звонком.',
      action: 'Добавить вторую кнопку "Get Written Estimate" → /get-estimate форма. Ожидаемый эффект: +100–200 лидов/мес.'
    },
    brief: {
      title: '07 · Форма брифа — новый блок',
      priority: 'critical',
      design: 'Двухколоночный: левая — объяснение зачем писать (3 чека: 24ч / конфиденциально / без обязательств) + цитата, правая — форма (имя+email / описание / тип+бюджет / красная кнопка).',
      analytics: '63% людей кликают CTA но не записываются. Текущий contact form CR только 0.21%. Форма брифа должна поднять это до 0.6–0.8%.',
      action: 'Создать /get-estimate страницу с формой. После отправки: кнопка меняется на зелёную "Brief sent! 24h". Цель: ×3 к contact form CR.'
    },
    error500: {
      title: '! · Страница ошибки 500',
      priority: 'critical',
      design: 'Нормальная 404/500 страница с навигацией, поиском и CTA. Сейчас ведёт в тупик.',
      analytics: '105,000 показов в Google — самая видимая страница сайта после главной. CTR всего 0.4% (должно быть 2–3%). 438 кликов теряется каждый месяц.',
      action: 'Исправить или переадресовать битые URL. Это даст +400–800 кликов/мес без каких-либо затрат на рекламу. Срок: до конца недели.'
    },
    services: {
      title: '04 · Услуги',
      priority: 'high',
      design: '4 карточки 2×2 сетка. Каждая: иконка (#10123B) + название + описание + красный pill со сроком.',
      analytics: 'Heatmap: резкий drop-off после верхних service sections. Причина: сейчас там стоит Tech Stack который отпугивает нетехнических клиентов.',
      action: 'Убрать красный с иконок (→ #10123B). Перенести Tech Stack ниже кейсов. Ожидаемый эффект: +10–15% к CTA CTR.'
    },
    testimonials: {
      title: '06 · Отзывы клиентов — новый блок',
      priority: 'high',
      design: '3 карточки с цитатами. Кавычка + цитата + аватар (инициалы) + имя + компания + ★★★★★.',
      analytics: '1,100 кликов About Us в месяц — люди ищут доверие. Отзывы на главной дадут это без лишнего клика.',
      action: 'Добавить между кейсами и финальным CTA. Ожидаемый эффект: +15–25% к CTA CR.'
    },
    cases: {
      title: '05 · Кейсы',
      priority: 'high',
      design: 'Сетка 3×2 из 6 кейсов. Фильтры: All / Web / Mobile / AI / Growth.',
      analytics: '373 клика Our Work в месяц. 6,822 просмотров Web App page.',
      action: 'Добавить фильтрацию по типу. Люди приходят за конкретным типом проекта. Ожидаемый эффект: +20–30% к глубине.'
    }
  };

  const metrics = [
    { label: 'Сессий / мес', value: '110K', color: '#185FA5' },
    { label: 'CTA clicks', value: '1,095', color: '#F59E0B' },
    { label: 'Записей / мес', value: '224', color: '#F4263D' },
    { label: 'Цель после правок', value: '400–500', color: '#16A34A' }
  ];

  const blockList = [
    { key: 'error500', label: '! Страница 500', priority: 'critical' },
    { key: 'hero', label: '01 Hero', priority: 'critical' },
    { key: 'brief', label: '07 Форма брифа', priority: 'critical' },
    { key: 'testimonials', label: '06 Отзывы', priority: 'high' },
    { key: 'cases', label: '05 Кейсы', priority: 'high' },
    { key: 'services', label: '04 Услуги', priority: 'high' }
  ];

  const currentBlock = blocks[activeBlock as keyof typeof blocks];

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif', background: '#f5f5f5', minHeight: '100vh', padding: '0' }}>
      {/* Header */}
      <div style={{ background: '#10123B', color: '#fff', padding: '24px 32px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 4px 0', fontSize: '28px', fontWeight: '600' }}>RapidDev Conversion Plan</h1>
        <p style={{ margin: '0', fontSize: '13px', opacity: 0.7 }}>Homepage Optimization Strategy · 2026</p>
      </div>

      {/* Metrics */}
      <div style={{ background: '#fff', padding: '24px 32px', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '1400px', margin: '0 auto' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ padding: '16px', background: '#f7f7fa', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: m.color, letterSpacing: '-0.5px' }}>{m.value}</div>
              <div style={{ fontSize: '11px', color: '#9496B5', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '0', maxWidth: '1400px', margin: '0 auto', minHeight: 'calc(100vh - 160px)' }}>
        {/* Sidebar */}
        <div style={{ background: '#fff', borderRight: '1px solid #eee', padding: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 160px)' }}>
          <div style={{ fontSize: '10px', fontWeight: '600', color: '#9496B5', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Блоки
          </div>
          {blockList.map((block) => (
            <button
              key={block.key}
              onClick={() => { setActiveBlock(block.key); setActiveTab('design'); }}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: 'none',
                background: activeBlock === block.key ? 'rgba(244, 38, 61, 0.08)' : 'transparent',
                color: activeBlock === block.key ? '#333' : '#888',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: activeBlock === block.key ? '500' : '400',
                borderRadius: '6px',
                marginBottom: '4px',
                transition: 'all 0.15s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{block.label}</span>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: block.priority === 'critical' ? '#F4263D' : '#F59E0B',
                  flexShrink: 0
                }}></span>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '32px', background: '#fff', overflowY: 'auto', maxHeight: 'calc(100vh - 160px)' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#10123B', fontWeight: '600' }}>
            {currentBlock.title}
            {currentBlock.priority === 'critical' && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#F4263D' }}>🔴 КРИТИЧНО</span>}
            {currentBlock.priority === 'high' && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#F59E0B' }}>🟠 ВАЖНО</span>}
          </h2>

          {/* Tabs */}
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
                fontWeight: '500',
                transition: 'all 0.15s'
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
                fontWeight: '500',
                transition: 'all 0.15s'
              }}
            >
              Аналитика
            </button>
          </div>

          {/* Content */}
          {activeTab === 'design' && (
            <div>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: '0 0 16px 0' }}>
                {currentBlock.design}
              </p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: '0 0 16px 0' }}>
                {currentBlock.analytics}
              </p>
            </div>
          )}

          {/* Action */}
          <div style={{ 
            background: currentBlock.priority === 'critical' ? '#FEF2F2' : '#FFFBEB',
            border: `1px solid ${currentBlock.priority === 'critical' ? '#FECACA' : '#FDE68A'}`,
            padding: '12px 14px',
            borderRadius: '6px',
            fontSize: '12px',
            color: currentBlock.priority === 'critical' ? '#991B1B' : '#92400E',
            lineHeight: '1.6'
          }}>
            <strong>Действие:</strong> {currentBlock.action}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#f7f7fa', padding: '16px 32px', textAlign: 'center', fontSize: '10px', color: '#9496B5' }}>
        RapidDev Homepage Conversion Plan · Основано на GA4 + Hotjar аналитике
      </div>
    </div>
  );
}
