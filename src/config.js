import { config } from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || bbqv5odu3lyhnuugdgsg-mysql.services.clever-cloud.com
export const BD_DATABASE=process.env.BD_DATABASE || bbqv5odu3lyhnuugdgsg
export const DB_USER=process.env.DB_USER || uotn9qt60k5xbcru
export const DB_PASSWORD=process.env.DB_PASSWORD || NkYHk0YjmOT5pGq4UuaG
export const DB_PORT=process.env.DB_PORT || 3306
export const PORT=process.env.PORT || 3000