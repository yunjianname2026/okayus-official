export interface Country {
  code: string;
  name: string;
  flag: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  addressPlaceholder: string;
  cityPlaceholder: string;
  postalCodePlaceholder: string;
}

export const COUNTRIES: Country[] = [
  {
    code: 'CN',
    name: '中国',
    flag: '🇨🇳',
    namePlaceholder: '张三',
    phonePlaceholder: '+86 138 0000 0000',
    addressPlaceholder: '朝阳区某某街道某某小区某某号楼某某单元',
    cityPlaceholder: '北京',
    postalCodePlaceholder: '100000'
  },
  {
    code: 'US',
    name: '美国',
    flag: '🇺🇸',
    namePlaceholder: 'John Smith',
    phonePlaceholder: '+1 (555) 123-4567',
    addressPlaceholder: '123 Main St, Apt 4B',
    cityPlaceholder: 'New York',
    postalCodePlaceholder: '10001'
  },
  {
    code: 'JP',
    name: '日本',
    flag: '🇯🇵',
    namePlaceholder: '山田太郎',
    phonePlaceholder: '+81 90-1234-5678',
    addressPlaceholder: '東京都渋谷区某某1-2-3',
    cityPlaceholder: '東京',
    postalCodePlaceholder: '150-0001'
  },
  {
    code: 'GB',
    name: '英国',
    flag: '🇬🇧',
    namePlaceholder: 'John Smith',
    phonePlaceholder: '+44 7700 900000',
    addressPlaceholder: '123 High Street, Flat 4',
    cityPlaceholder: 'London',
    postalCodePlaceholder: 'SW1A 1AA'
  },
  {
    code: 'HK',
    name: '香港',
    flag: '🇭🇰',
    namePlaceholder: '陳大文',
    phonePlaceholder: '+852 9123 4567',
    addressPlaceholder: '中環某某大廈某某樓某某室',
    cityPlaceholder: '香港',
    postalCodePlaceholder: ''
  },
  {
    code: 'SG',
    name: '新加坡',
    flag: '🇸🇬',
    namePlaceholder: 'Tan Wei Ming',
    phonePlaceholder: '+65 9123 4567',
    addressPlaceholder: 'Blk 123 Orchard Road #12-345',
    cityPlaceholder: 'Singapore',
    postalCodePlaceholder: '238858'
  }
];

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find(country => country.code === code);
}
