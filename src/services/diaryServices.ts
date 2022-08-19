import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

/* en ESModules es necesario poner las extensiones
en typescript no es necesario
prioridad de archivos
tsx, ts, node, js, json
*/

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // se usa asercion de tipos, pero evitar en lo posible

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (_id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === _id)
  if (entry !== null) {
    // const { ...restOfDiary } = entry
    return entry
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
