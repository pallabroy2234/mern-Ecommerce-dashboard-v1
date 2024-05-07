import io from 'socket.io-client';
import {baseUrl} from "../api/api.js";

export const socket = io(baseUrl);




export const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
}


