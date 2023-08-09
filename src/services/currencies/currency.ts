export interface IDailyCurrency {
  Date: string
  PreviousDate: string
  PreviousURL: string
  Timestamp: string
  Valute: Record<CurrencyCharCode, ICurrency>
}

export type ICurrency = {
  ID: string
  NumCode: string
  CharCode: CurrencyCharCode
  Nominal: number
  Name: string
  Value: number
  Previous: number
}

export enum CurrencyCharCode {
  AUD = 'AUD',
  AZN = 'AZN',
  GBP = 'GBP',
  AMD = 'AMD',
  BYN = 'BYN',
  BGN = 'BGN',
  BRL = 'BRL',
  HUF = 'HUF',
  VND = 'VND',
  HKD = 'HKD',
  GEL = 'GEL',
  DKK = 'DKK',
  AED = 'AED',
  USD = 'USD',
  EUR = 'EUR',
  EGP = 'EGP',
  INR = 'INR',
  IDR = 'IDR',
  KZT = 'KZT',
  CAD = 'CAD',
  QAR = 'QAR',
  KGS = 'KGS',
  CNY = 'CNY',
  MDL = 'MDL',
  NZD = 'NZD',
  NOK = 'NOK',
  PLN = 'PLN',
  RON = 'RON',
  XDR = 'XDR',
  SGD = 'SGD',
  TJS = 'TJS',
  THB = 'THB',
  TRY = 'TRY',
  TMT = 'TMT',
  UZS = 'UZS',
  UAH = 'UAH',
  CZK = 'CZK',
  SEK = 'SEK',
  CHF = 'CHF',
  RSD = 'RSD',
  ZAR = 'ZAR',
  KRW = 'KRW',
  JPY = 'JPY'
}