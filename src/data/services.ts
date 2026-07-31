export type Category = 'coating' | 'wash' | 'detail' | 'interior';

export interface PriceGroup {
  title?: string;
  rows: { label: string; price: string }[];
}

export interface Service {
  id: string;
  category: Category;
  name: string;
  tagline: string;
  badge?: string;
  features: string[];
  note?: string;
  priceGroups: PriceGroup[];
}

export const categories: { id: Category; name: string; desc: string }[] = [
  { id: 'coating', name: '鍍膜服務', desc: '車體鍍膜・玻璃鍍膜，為車漆與玻璃加上長效防護層' },
  { id: 'wash', name: '洗車服務', desc: '精緻洗車・棕櫚蠟・Zymol 釉蠟，由內而外的潔淨' },
  { id: 'detail', name: '美容服務', desc: '漆面拋光、除痕修飾、深層鏡面處理' },
  { id: 'interior', name: '車廂護理', desc: '內裝深層清洗、皮革養護、臭氧淨化' },
];

export const services: Service[] = [
  {
    id: 'diamond-coating',
    category: 'coating',
    name: 'O3 頂級鑽石車體鍍膜塗層',
    tagline: '漆面終極防護，亮度、硬度、撥水性全面升級',
    badge: '旗艦推薦',
    features: [
      '外觀洗三道工法：泡沫羊毛洗車、藥劑分解清洗表面柏油鐵粉等外來物質、磁土洗車',
      '車體鍍膜四道工序：漆面除痕與氧化物修飾、全車漆面拋光護理、車漆脫酯、鍍膜塗層',
      '門邊美容、塑料護理、輪框美容、輪胎護理',
      '車牌去汙處理、玻璃去汙擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '15,000' },
          { label: '中型轎車', price: '17,000' },
          { label: '大型豪車・5 人休旅車', price: '20,000' },
          { label: '7 人休旅車', price: '25,000' },
        ],
      },
    ],
  },
  {
    id: 'glass-coating',
    category: 'coating',
    name: 'O3 玻璃長效晶鑽鍍膜',
    tagline: '雨天視線更清晰，責任施工保固一年',
    badge: '保固一年',
    features: [
      '玻璃去污拋光潔淨護理',
      '增強撥水性',
      '形成鏡狀覆膜，提升雨天能見度',
      '預防油膜形成、下雨天模糊',
      '預防水痕水垢',
      '減少雨刷刮痕',
    ],
    note: '責任施工，保固一年',
    priceGroups: [
      {
        title: '小型轎車／中型轎車',
        rows: [
          { label: '前擋玻璃', price: '2,000' },
          { label: '前後擋玻璃', price: '3,500' },
          { label: '全車玻璃', price: '5,000' },
        ],
      },
      {
        title: '大型豪車／5 人休旅車',
        rows: [
          { label: '前擋玻璃', price: '2,000' },
          { label: '前後擋玻璃', price: '3,500' },
          { label: '全車玻璃', price: '7,000' },
        ],
      },
    ],
  },
  {
    id: 'basic-wash',
    category: 'wash',
    name: 'O3 精緻洗車',
    tagline: '日常保養首選，快速恢復愛車光彩',
    features: [
      '外觀泡沫羊毛洗車',
      '車漆施工洗車專用水鍍膜',
      '門邊清潔、鋁圈清潔、輪胎護理、進氣孔塑料上亮光蠟',
      '內裝地毯吸塵、塑料皮革擦拭、玻璃擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '700' },
          { label: '中型轎車', price: '800' },
          { label: '5 人休旅車', price: '900' },
          { label: '7 人休旅車', price: '1,200' },
        ],
      },
    ],
  },
  {
    id: 'palm-wash',
    category: 'wash',
    name: 'O3 棕櫚潤澤洗車',
    tagline: '棕櫚蠟堆疊，溫潤光澤更持久',
    features: [
      '外觀洗兩道工法：泡沫羊毛洗車、清洗漆面柏油鐵粉等',
      '棕櫚堆疊上蠟',
      '門邊清潔、鋁圈清潔、輪胎護理、進氣孔塑料上亮光蠟',
      '內裝地毯吸塵、塑料皮革擦拭、玻璃擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '1,200' },
          { label: '中型轎車', price: '1,400' },
          { label: '5 人休旅車', price: '1,600' },
          { label: '7 人休旅車', price: '2,000' },
        ],
      },
    ],
  },
  {
    id: 'zymol-wash',
    category: 'wash',
    name: 'Zymol 鈦釉蠟洗車',
    tagline: '美國 Zymol 頂級釉蠟，鏡面級光澤',
    badge: '人氣首選',
    features: [
      '外觀洗兩道工法：泡沫羊毛洗車、清洗漆面柏油鐵粉等',
      'Zymol 堆疊上蠟',
      '門邊清潔、鋁圈清潔、輪胎護理、進氣孔塑料上亮光蠟',
      '內裝地毯吸塵、塑料皮革擦拭、玻璃擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '2,000' },
          { label: '中型轎車', price: '2,200' },
          { label: '5 人休旅車', price: '2,500' },
          { label: '7 人休旅車', price: '3,000' },
        ],
      },
    ],
  },
  {
    id: 'zymol-deep-wash',
    category: 'wash',
    name: 'Zymol 釉蠟深層清洗',
    tagline: '磁土深層清潔 + 釉蠟堆疊，由底層煥發光采',
    features: [
      '外觀洗兩道工法：泡沫羊毛洗車、泡沫磁土洗車（清洗漆面柏油、鐵粉等）',
      '車漆清潔蠟施工',
      '車漆堆疊 Zymol 釉蠟',
      '門邊清潔、鋁圈清潔、輪胎護理、進氣孔塑料上亮光蠟',
      '內裝地毯吸塵、塑料皮革擦拭、玻璃擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '2,300' },
          { label: '中型轎車', price: '2,500' },
          { label: '5 人休旅車', price: '2,800' },
          { label: '7 人休旅車', price: '3,500' },
        ],
      },
    ],
  },
  {
    id: 'small-detail',
    category: 'detail',
    name: 'O3 雙層潑水晶釉小美容',
    tagline: '三道洗 + 兩道蠟，潑水光澤有感升級',
    features: [
      '外觀洗三道工法：泡沫羊毛洗車、藥劑分解清洗表面柏油鐵粉等外來物質、磁土洗車',
      '外觀上兩道蠟：全車漆面拋光護理、棕櫚堆疊上蠟',
      '門邊美容、塑料護理、鋁圈美容、輪胎護理、車牌去汙處理、玻璃去汙擦拭',
      '內裝地毯吸塵、塑料皮革擦拭保養',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '3,000' },
          { label: '中型轎車', price: '4,000' },
          { label: '5 人休旅車', price: '5,000' },
          { label: '7 人休旅車', price: '6,000' },
        ],
      },
    ],
  },
  {
    id: 'big-detail',
    category: 'detail',
    name: 'O3 深層鏡面大美容',
    tagline: '除痕修飾 + 三道蠟工序，重現鏡面新車光',
    badge: '極致工藝',
    features: [
      '外觀洗三道工法：泡沫羊毛洗車、藥劑分解清洗表面柏油鐵粉等外來物質、磁土洗車',
      '外觀上三道蠟：漆面除痕與氧化物修飾、全車漆面拋光護理、棕櫚堆疊上蠟',
      '門邊美容、塑料護理、輪框美容、輪胎護理',
      '車牌去汙處理、玻璃去汙擦拭',
    ],
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '6,000' },
          { label: '中型轎車', price: '7,000' },
          { label: '5 人休旅車', price: '8,000' },
          { label: '7 人休旅車', price: '10,000' },
        ],
      },
    ],
  },
  {
    id: 'interior-care',
    category: 'interior',
    name: 'O3 車廂全套清洗護理',
    tagline: '由座椅到空氣，給家人最乾淨的乘坐空間',
    features: [
      '內裝清洗：皮椅或絨布椅去污清洗、門板中控台儀表板清潔、天花板局部清潔、地毯清潔處理',
      '皮革養護',
      '車廂精緻吸塵處理、後車廂吸塵清潔處理',
      '車內飾板、核桃木上蠟護理',
      'O3 臭氧循環空氣淨化處理',
    ],
    note: '另可加購福士車內空氣清新（SGS 認證產品，消毒抑菌、空氣換新）加購價 $600，建議半年施作一次',
    priceGroups: [
      {
        rows: [
          { label: '小型轎車', price: '3,000' },
          { label: '中型轎車', price: '3,500' },
          { label: '5 人休旅車', price: '4,000' },
          { label: '7 人休旅車', price: '5,000' },
        ],
      },
    ],
  },
];

export const shopInfo = {
  name: 'O3 汽車美容',
  branch: '高鐵店',
  phone: '(04) 2338-5321',
  phoneHref: 'tel:+886423385321',
  address: '414 台中市烏日區高鐵三路 69 號（旁邊第一停車場內）',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('台中市烏日區高鐵三路69號'),
};
