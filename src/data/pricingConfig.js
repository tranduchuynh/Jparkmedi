export const CURRENCY_RATES = {
  usd: { rate: 1, symbol: '$', prefix: true, name: 'USD' },
  aud: { rate: 1.5145, symbol: '$', prefix: true, name: 'AUD' },
  idr: { rate: 18794, symbol: 'Rp ', prefix: true, formatIdr: true, name: 'IDR' },
  myr: { rate: 4.2909, symbol: 'RM ', prefix: true, name: 'MYR' },
  eur: { rate: 0.9332, symbol: '€', prefix: false, name: 'EUR' },
  cad: { rate: 1.4964, symbol: '$', prefix: true, name: 'CAD' },
  gbp: { rate: 0.7930, symbol: '£', prefix: true, name: 'GBP' },
};

export const FEATURED_OFFERS = [
  {
    service: 'Deep Plane Facelift',
    oldUsd: 16783,
    oldAud: 22990,
    abmediUsd: 1999,
    abmediAud: 2738,
    save: '88%'
  },
  {
    service: 'SMAS Facelift',
    oldUsd: 13067,
    oldAud: 17900,
    abmediUsd: 1399,
    abmediAud: 1916,
    save: '89%'
  },
  {
    service: 'Neck Lift / Mini Facelift',
    oldUsd: 10950,
    oldAud: 15000,
    abmediUsd: 999,
    abmediAud: 1368,
    save: '91%'
  },
  {
    service: 'Buccal Fat Removal',
    oldUsd: 4015,
    oldAud: 5500,
    abmediUsd: 699,
    abmediAud: 958,
    save: '83%'
  },
  {
    service: 'Smile Line Rejuvenation',
    oldUsd: 730,
    oldAud: 1000,
    abmediUsd: 499,
    abmediAud: 684,
    save: '32%'
  }
];

export const EXCLUSIVE_OFFERS = [
  {
    num: 1,
    title: 'Birthday Month Privilege',
    benefit: '$100 treatment credit',
    eligibility: 'Any patient having their birthday in the promotional month'
  },
  {
    num: 2,
    title: 'Free Luxury Airport Transfer',
    benefit: 'Complimentary private VIP car pickup from Noi Bai Airport to clinic or hotel',
    eligibility: 'All international & out-of-town patients booking surgery'
  },
  {
    num: 3,
    title: 'Complimentary Recovery Kit',
    benefit: 'Medical-grade postoperative skincare kit & facial compression garment ($150 value)',
    eligibility: 'Invoices over $5,000 (Limited to first 100 clients)'
  },
  {
    num: 4,
    title: 'Group Booking Privileges',
    benefit: 'Group of 2: $100 credit/person | Group of 5+: $200 credit/person',
    eligibility: 'Friends or relatives booking procedures together'
  },
  {
    num: 5,
    title: 'Early Online Booking Privilege',
    benefit: '10% off deducted directly from invoice with a $200 deposit',
    eligibility: 'Online reservation confirmed in advance'
  },
  {
    num: 6,
    title: 'Premium Care Package',
    benefit: 'Comprehensive VIP recovery care package',
    eligibility: 'Invoices over $10,000'
  },
  {
    num: 7,
    title: 'Returning Client Privilege',
    benefit: '$100 treatment credit',
    eligibility: 'Returning clients booking new service or referring a friend'
  }
];

export function formatPrice(usdAmount, currencyKey = 'usd', fixedAmount = null) {
  const cur = CURRENCY_RATES[currencyKey] || CURRENCY_RATES.usd;
  let val;
  if (currencyKey !== 'usd' && fixedAmount != null && !isNaN(Number(fixedAmount))) {
    val = Number(fixedAmount);
  } else {
    val = Number(usdAmount) * cur.rate;
  }

  if (currencyKey === 'idr') {
    return `${cur.symbol}${(Math.round(val / 100000) / 10).toFixed(1)} Jt`;
  }

  const rounded = Math.round(val).toLocaleString('en-US');
  if (cur.prefix) {
    return `${cur.symbol}${rounded}`;
  } else {
    return `${rounded} ${cur.symbol}`;
  }
}
