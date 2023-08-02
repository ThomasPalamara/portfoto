declare module 'imagekitio-react';

type Photo = {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags: string[];
  isPrivateFile: boolean;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime: string;
  customMetadata: {
    order: number;
  };
};

type Category = {
  title: string;
  slug: string;
  description?: string;
};
