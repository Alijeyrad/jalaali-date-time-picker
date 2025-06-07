// lib/shamsi.ts
import jalaali from 'jalaali-js'

export function toShamsi(date: Date): string {
  const { jy, jm, jd } = jalaali.toJalaali(date)
  return `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')}`
}

export function fromShamsi(jy: number, jm: number, jd: number): Date {
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd)
  return new Date(gy, gm - 1, gd)
}

export function getMonthDays(jy: number, jm: number): number {
  return jalaali.jalaaliMonthLength(jy, jm)
}

export function getFirstDayOfMonth(jy: number, jm: number): number {
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, 1)
  return new Date(gy, gm - 1, gd).getDay()
}

export function getJalaliParts(date: Date): { jy: number; jm: number; jd: number } {
  return jalaali.toJalaali(date)
}