import { useEffect, useState} from 'react';
import axios from 'axios';

export default function AnimeSearch( query,genre ) {
    const [anime,setAnime] = useState([])
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        let cancel
        axios({
            method: 'GET',
            url: 'https://api.jikan.moe/v3/search/anime',
            params: { q: query, genre: genre },
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then( res => {
            setAnime(res.data.results.map(a => a))
            setLoading(false)
        })
        .catch(e => {
            if(axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query,genre])

    return {anime,loading};
}
