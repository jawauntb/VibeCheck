export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Vibes: {
        Row: {
          account: string | null
          created_at: string | null
          id: number
          location: string | null
          vibe: string | null
        }
        Insert: {
          account?: string | null
          created_at?: string | null
          id?: number
          location?: string | null
          vibe?: string | null
        }
        Update: {
          account?: string | null
          created_at?: string | null
          id?: number
          location?: string | null
          vibe?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
