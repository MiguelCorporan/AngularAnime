export interface ApiResponse {
    pagination: {
      last_visible_page: number;
      has_next_page: boolean;
      current_page: number;
      items: {
     
      };
    };
    data: AnimeData[];
  }
  
  export interface AnimeData {
    mal_id: number;
    title: string;
    synopsis: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    episodes: number;
    airing: boolean;
    score: number;
  }
  