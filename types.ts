

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full content of the article
  category: string;
  imageUrl: string;
  author: {
    name: string;
  };
  date: string;
  commentsCount: number;
  views: number;
  shares: number;
}