export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  tags: string;
  published: boolean;
  createdAt: string;
}

export interface CreatePostData {
  title: string;
  slug: string;
  content: string;
  tags: string;
}
