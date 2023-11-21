export interface Giocatori {
    data: Players[]
    meta: Meta
  }
  
  export interface Players {
    id: number
    first_name: string
    height_feet?: number
    height_inches?: number
    last_name: string
    position: string
    team: Team
    weight_pounds?: number
  }
  
  export interface Team {
    id: number
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    name: string
  }
  
  export interface Meta {
    total_pages: number
    current_page: number
    next_page: number
    per_page: number
    total_count: number
  }
  