import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import BlogGridItem from './BlogGridItem';

const BlogGrid = () => {
  const [articles, setArticles] = useState({ data: null, isLoading: true });

  const loadArticles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        const croppedData = json.slice(0, 6);
        setArticles({ data: croppedData, isLoading: false });
      });
  };
  useEffect(() => {
    loadArticles();
  }, []);

  const deleteArticle = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
  };

  const { data, isLoading } = articles;

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.map(({ id, title, body }) => (
        <Grid
          container
          item
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          spacing={0}
          key={id}
        >
          <BlogGridItem
            title={title}
            body={body}
            id={id}
            deleteArticle={deleteArticle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogGrid;
