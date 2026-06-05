import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const descTag = document.querySelector('meta[name="description"]');
    const keywordsTag = document.querySelector('meta[name="keywords"]');

    if (descTag) {
      descTag.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (keywords) {
      if (keywordsTag) {
        keywordsTag.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords]);

  return null;
};

export default SEO;
