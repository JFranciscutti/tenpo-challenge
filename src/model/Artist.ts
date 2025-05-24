export interface Artist {
  id: string;
  name: string;
  country: string;
  disambiguation: string;
  foundation_year: string;
  "life-span": {
    begin: string;
    ended: boolean | null;
    end: string | null;
  };
}
