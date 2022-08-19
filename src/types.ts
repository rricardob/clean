export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | ' good' | 'ok' | 'poor'

export enum Weathers {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibilitys {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

// contrato
// interface pensada para ser extendida

export interface DiaryEntry{
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
