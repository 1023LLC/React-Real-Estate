import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e8e52ed77fmsh8ef2b66deaf5a1ap1960afjsna53cfe88b2c4',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}