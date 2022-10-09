import axios from "axios";

export class PostService {
  static async getAll(limit, page) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: { _page: page, _limit: limit },
    });
    return res;
  }
}
