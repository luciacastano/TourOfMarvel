export interface Hero {
  data: {
    total: number;
    results: Results[];
  }
}

export interface Results {
  id: number;
  name: string;
  comics: Comics;
  thumbnail: Thumbnail;
}

export interface Comics {
  available: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
