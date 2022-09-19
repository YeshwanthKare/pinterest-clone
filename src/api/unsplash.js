import axios from "axios";
// key: E5sYHUH3zNyYZ4QRQaU_EBTFSb__sUL4TpBfgmZWPSU
// secret: ICgitpjGdeTY60IBDfqY0fWaymj0UksaZCFy8dc5k7I

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID E5sYHUH3zNyYZ4QRQaU_EBTFSb__sUL4TpBfgmZWPSU",
  },
});
