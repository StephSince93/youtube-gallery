import axios from "axios";

const SERVER = 'http://localhost:3001/';

export async function getVideos() {
    return await axios.get(`${SERVER}`)
    // return await axios.get(`${SERVER}videos`);
}