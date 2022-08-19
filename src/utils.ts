import { NewDiaryEntry, Visibility, Visibilitys, Weather, Weathers } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isweather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const isweather = (param: any): boolean => {
  return Object.values(Weathers).includes(param)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibilitys).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
