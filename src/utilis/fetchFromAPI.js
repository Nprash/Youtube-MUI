import axios from "axios";


const BASE_URL="https://youtube-v311.p.rapidapi.com";

const options = { 
  params: {
    part: 'snippet',
    // channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	// console.error(error);
}





export const fetchFromAPI = async(url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  // console.log(data)
    // const data = await response.json()
    return data;
}
//get method takes a url string with params
// response  = await fetch("")
//then this resonse should convert into json like const data =response.json(),
//here we directly destructred to get json-data