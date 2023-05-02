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
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: number
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id?: number
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: number
          username?: string | null
          website?: string | null
        }
      }
      vibes: {
        Row: {
          account: string | null
          created_at: string | null
          id: number
          location: string | null
          user_id: string | null
          vibe: string | null
        }
        Insert: {
          account?: string | null
          created_at?: string | null
          id?: number
          location?: string | null
          user_id?: string | null
          vibe?: string | null
        }
        Update: {
          account?: string | null
          created_at?: string | null
          id?: number
          location?: string | null
          user_id?: string | null
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
