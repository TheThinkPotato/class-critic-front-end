const PORT = "80";
const URL = "http://127.0.0.1:" + PORT;
const SEARCH_URL = URL + "/student/search";

export function search(searchTerm) {
  return fetch(SEARCH_URL + "?search=" + searchTerm)
    .then((res) => res.json())
    .then((data) => {
      console.log(">>>", data);
      return { data };
    });
}
