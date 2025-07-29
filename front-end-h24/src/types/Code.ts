export interface Code {
  id?: number;
  titre: string;
  description: string;
  categorie: "php" | "html" | "css";
  code: string;
  created_at?: string;
}
