export type StateName = 'Alabama'
  | 'Alaska'
  | 'Arizona'
  | 'Arkansas'
  | 'California'
  | 'Colorado'
  | 'Connecticut'
  | 'Delaware'
  | 'Florida'
  | 'Georgia'
  | 'Hawaii'
  | 'Idaho'
  | 'Illinois'
  | 'Indiana'
  | 'Iowa'
  | 'Kansas'
  | 'Kentucky'
  | 'Louisiana'
  | 'Maine'
  | 'Maryland'
  | 'Massachusetts'
  | 'Michigan'
  | 'Minnesota'
  | 'Mississippi'
  | 'Missouri'
  | 'Montana'
  | 'Nebraska'
  | 'Nevada'
  | 'New Hampshire'
  | 'New Jersey'
  | 'New Mexico'
  | 'New York'
  | 'North Carolina'
  | 'North Dakota'
  | 'Ohio'
  | 'Oklahoma'
  | 'Oregon'
  | 'Pennsylvania'
  | 'Rhode Island'
  | 'South Carolina'
  | 'South Dakota'
  | 'Tennessee'
  | 'Texas'
  | 'Utah'
  | 'Vermont'
  | 'Virginia'
  | 'Washington'
  | 'West Virginia'
  | 'Wisconsin'
  | 'Wyoming';

type StateInfo = { [stateName in StateName]: StateDetails };

export const StateNameList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin',
  'Wyoming'];

export const isStateName = (x: any): x is StateName => StateNameList.includes(x);

export type StateDetails = {
  width: number,
  height: number,
  x?: number,
  y?: number,
  scale: number;
  rotation?: number,
  color?: string;
}

export const StateInfo: StateInfo = {
  Alabama: {
    width: 633,
    height: 1000,
    scale: 0.1,
    x: 150,
    y: 100,
  },
  Alaska: {
    width: 1143,
    height: 1000,
    scale: 0.2,
    x: -350,
    y: -20
  },
  Arizona: {
    height: 1000,
    width: 788,
    x: -242,
    y: 110,
    scale: 0.115,
    rotation: -5 * Math.PI / 180
  },
  Arkansas: {
    width: 1090,
    height: 1000,
    scale: 0.078,
    x: 62,
    y: 142,
  },
  California: {
    height: 1000,
    width: 806,
    scale: 0.2,
    x: -352,
    y: 172,
    rotation: -5 * Math.PI / 180
  },
  Colorado: {
    height: 1000,
    width: 1339,
    scale: 0.09,
    x: -140,
    y: 215
  },
  Connecticut: {
    height: 1000,
    width: 1487,
    scale: 0.03,
    x: 385,
    y: 288,
    rotation: Math.PI/180
  },
  Delaware: {
    height: 1000,
    width: 492,
    scale: 0.03,
    x: 333,
    y: 236,
  },
  Florida: {
    width: 1127,
    height: 1000,
    scale: 0.12,
    x: 201,
    y: 13,
  },
  Georgia: {
    width: 823,
    height: 1000,
    scale: 0.1,
    x: 200,
    y: 97,
    rotation: 2 * Math.PI / 180
  },
  Hawaii: {
    height: 1000,
    width: 1238,
    scale: 0.1,
    x: -150,
    y: -50
  },
  Idaho: {
    height: 1000,
    width: 637,
    scale: 0.16,
    x: -280,
    y: 330,
    rotation: -5 * Math.PI / 180
  },
  Illinois: {
    height: 1000,
    width: 575,
    scale: 0.12,
    x: 105,
    y: 225
  },
  Indiana: {
    height: 1000,
    width: 632,
    scale: 0.08,
    x: 155,
    y: 240,
    rotation: 2*Math.PI/180
  },
  Iowa: {
    height: 1000,
    width: 1587,
    scale: 0.06,
    x: 48,
    y: 270
  },
  Kansas: {
    height: 1000,
    width: 1824,
    scale: 0.06,
    x: -30,
    y: 205
  },
  Kentucky: {
    height: 1000,
    width: 1736,
    x: 140,
    y: 215,
    scale: 0.07,
    rotation: -6 * Math.PI / 180
  },
  Louisiana: {
    width: 1136,
    height: 1000,
    scale: 0.08,
    x: 74,
    y: 70,
  },
  Maine: {
    height: 1000,
    width: 603,
    scale: 0.1,
    x: 442,
    y: 345,
    rotation: 4*Math.PI/180
  },
  Maryland: {
    height: 1000,
    width: 1778,
    x: 300,
    y: 230,
    scale: 0.045
  },
  Massachusetts: {
    height: 1000,
    width: 2073,
    scale: 0.04,
    x: 400,
    y: 290,
    rotation: 3*Math.PI/180
  },
  Michigan: {
    height: 1000,
    width: 1051,
    scale: 0.11,
    x: 145,
    y: 330,
    rotation: 1*Math.PI/180
  },
  Minnesota: {
    height: 1000,
    width: 857,
    scale: 0.14,
    x: 42,
    y: 360
  },
  Mississippi: {
    width: 611,
    height: 1000, scale: 0.1,
    x: 98.5,
    y: 100
  },
  Missouri: {
    height: 1000,
    width: 1009,
    scale: 0.09,
    x: 58,
    y: 205
  },
  Montana: {
    height: 1000,
    width: 1643,
    scale: 0.10,
    x: -200,
    y: 365,
  },
  Nebraska: {
    height: 1000,
    width: 1937,
    scale: 0.07,
    x: -40,
    y: 265,
    rotation: 2 * Math.PI / 180
  },
  Nevada: {
    height: 1000,
    width: 686,
    x: -317,
    y: 186,
    scale: 0.15,
    rotation: -6 * Math.PI / 180
  },
  "New Hampshire": {
    height: 1000,
    width: 560,
    scale: 0.06,
    x: 405,
    y: 322,
    rotation: 4*Math.PI/180
  },
  "New Jersey": {
    height: 1000,
    width: 587,
    scale: 0.055,
    x: 346,
    y: 258
  },
  "New Mexico": {
    height: 1000,
    width: 930,
    x: -155,
    y: 124,
    scale: 0.11
  },
  "New York": {
    height: 1000,
    width: 1224,
    scale: 0.11,
    x: 320,
    y: 320
  },
  "North Carolina": {
    height: 1000,
    width: 2369,
    x: 260,
    y: 155,
    scale: 0.06
  },
  "North Dakota": {
    height: 1000,
    width: 1541,
    scale: 0.075,
    x: -65,
    y: 380
  },
  Ohio: {
    height: 1000,
    width: 902,
    scale: 0.09,
    x: 205,
    y: 255,
  },
  Oklahoma: {
    height: 1000,
    width: 1883,
    x: -40,
    y: 148.5,
    scale: 0.07
  },
  Oregon: {
    height: 1000,
    width: 1226,
    scale: 0.085,
    x: -375,
    y: 295,
    rotation: -6 * Math.PI / 180
  },
  Pennsylvania: {
    height: 1000,
    width: 1630,
    scale: 0.065,
    x: 295,
    y: 275,
  },
  "Rhode Island": {
    height: 1000,
    width: 772,
    scale: 0.024,
    x: 410,
    y: 291,
    rotation: Math.PI/180
  },
  "South Carolina": {
    height: 1000,
    width: 1232,
    x: 242,
    y: 122,
    scale: 0.075,
  },
  "South Dakota": {
    height: 1000,
    width: 1657,
    scale: 0.075,
    x: -62,
    y: 315
  },
  Tennessee: {
    height: 1000,
    width: 3560,
    x: 162,
    y: 164,
    scale: 0.041,
  },
  Texas: {
    width: 1002,
    height: 1000,
    scale: 0.21,
    x: -62,
    y: 70,
  },
  Utah: {
    height: 1000,
    width: 791,
    scale: 0.1,
    x: -240,
    y: 210,
    rotation: -5 * Math.PI / 180
  },
  Vermont: {
    height: 1000,
    width: 618,
    scale: 0.055,
    x: 388,
    y: 327,
    rotation: 3*Math.PI/180
  },
  Virginia: {
    height: 1000,
    width: 2057,
    x: 262,
    y: 210,
    scale: 0.07
  },
  Washington: {
    height: 1000,
    width: 1468,
    scale: 0.065,
    x: -372,
    y: 358,
    rotation: -5 * Math.PI / 180
  },
  "West Virginia": {
    height: 1000,
    width: 1080,
    scale: 0.075,
    x: 250,
    y: 230
  },
  Wisconsin: {
    height: 1000,
    width: 911,
    scale: 0.1,
    x: 95,
    y: 325
  },
  Wyoming: {
    height: 1000,
    width: 1350,
    x: -167,
    y: 290,
    scale: 0.085,
    rotation: -1 * Math.PI / 180
  }
};
