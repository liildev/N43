import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Pagination,
  PostList,
  PostsFilter,
  PostsForm,
} from "./components";
import { usePosts } from "./hooks/usePost";
import { PostService } from "./API/post.service";
import { useFetching } from "./hooks/useFetching";
import { getArrayPages, getTotalCount } from "./utils/page";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;

  const sortedAndSearchedPosts = usePosts(filter, posts);

  const [fetchData, loading, error] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    const totalCount = res.headers["x-total-count"];
    setTotalPages(getTotalCount(totalCount, limit));
    setPosts(res.data);
  });

  const arrayPages = getArrayPages(totalPages);

  useEffect(() => {
    fetchData(limit, page);
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <Button onClick={() => setVisible(true)}>Create Post</Button>
      <Modal visible={visible} setVisible={setVisible}>
        <PostsForm create={createPost} />
      </Modal>

      <PostsFilter filter={filter} setFilter={setFilter} />

      {error && <h1>error: {error}</h1>}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          removePost={removePost}
          title={"Posts List"}
        />
      )}

      <Pagination pages={arrayPages} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
