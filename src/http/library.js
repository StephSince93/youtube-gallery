import axios from "axios";

const SERVER = 'http://localhost:3001/';

export async function getVideos() {
    return await axios.get(`${SERVER}videos`)
}

export async function addNewVideo({name, url, createdAt}) {
    return await axios.post(`${SERVER}videos`, {name, url, createdAt});
}

export async function deleteVideo(id) {
    return await axios.delete(`${SERVER}videos/${id}`);
}