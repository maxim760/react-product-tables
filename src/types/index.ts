import React from 'react'
export enum STATUS {
  NEVER = "NEVER",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

export type IAnyObject = Record<any, any>

export type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void