import axios from "axios";

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '18cae65599mshc2ae603a38272a2p19e31djsn4718e8d63b0c',
        'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    }
};

export const fetch = async(url: string, opts?: any) => {
    const newOptions = { ...options, ...opts };
    const res = await axios.get(url, newOptions);
    return res.data;
}

export const fetchPlaces = async (query: string) => {
    const url = `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${query}&language=en`;
    const res = await fetch(url);
    return res;
}

export const fetcNearby = async (query: string) => {
    const url = `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${query}&radius=5000&language=en`;
    const res = await fetch(url);
    return res;
}