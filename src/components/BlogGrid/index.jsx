import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';

import BlogGridItem from './BlogGridItem';

const BlogGrid = ({ onOpenModal }) => {
  const [articles, setArticles] = useState({ data: null, isLoading: true, isError: false });

  const loadArticles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        const dataPart = json.slice(0, 6);
        setArticles({ data: dataPart, isLoading: false });
      })
      .catch(() => {
        setArticles({ data: null, isLoading: false, isError: true });
        toast.error('Failed to load articles');
      });
  };
  useEffect(() => {
    loadArticles();
  }, []);

  const deleteArticle = ({ id, setIsRemoving }) => {
    setIsRemoving(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const { isLoading, data } = articles;
        const arrayWithoutDeletedPost = data.filter((post) => post.id !== id);
        setArticles({ isLoading, data: arrayWithoutDeletedPost });
        toast.success('Post was successfuly deleted');
      })
      .catch(() => {
        setIsRemoving(false);
        toast.error('Unable to delete post');
      });
  };

  const { data, isLoading, isError } = articles;

  if (isError) {
    return (
      <Typography align="center" color="error" fontWeight="bold" variant="h4">
        Failed to load articles
      </Typography>
    );
  }

  if (isLoading) {
    return <Loader type="TailSpin" color="#27A581" height={100} width={100} />;
  }

  return (
    <Grid container spacing={2}>
      {data.map(({ id, title, body }) => (
        <Grid container item xl={4} lg={4} md={6} sm={12} xs={12} spacing={0} key={id}>
          <BlogGridItem
            title={title}
            body={body}
            id={id}
            deleteArticle={deleteArticle}
            onOpenModal={onOpenModal}
          />
        </Grid>
      ))}
    </Grid>
  );
};

BlogGrid.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default BlogGrid;
