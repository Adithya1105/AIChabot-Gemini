import axios from 'axios';

const API_URL = 'http://localhost:8080/api/chat/ask'; 
 export const fetchChatResponse = async (question) => {
    try
    {
        const response = await axios.post(API_URL,{question});

       return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
