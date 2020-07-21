import { useEffect, useState} from 'react';
import axios from 'axios';

export default function AnimeSearch( query ) {
    const [anime,setAnime] = useState([])


    useEffect(() => {
        let cancel
        axios({
            method: 'GET',
            url: 'https://api.jikan.moe/v3/search/anime',
            params: { q: query },
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then( res => {
            setAnime(res.data.results.map(a => a.title))
        })
        .catch(e => {
            if(axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query])

    //     axios.get('https://api.jikan.moe/v3/search/anime?q={query}').then(res => {
    //       setAnime(res.data.results.map(a => a.title))
    //     })
    //   },[query])

    return anime;
}
