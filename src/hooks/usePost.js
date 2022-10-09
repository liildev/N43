import { useMemo } from "react";

const useSortedPosts = (filter, posts) => {
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  return sortedPosts;
};

export const usePosts = (filter, posts) => {
  const sortedPosts = useSortedPosts(filter, posts);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  });

  return sortedAndSearchedPosts;
};
