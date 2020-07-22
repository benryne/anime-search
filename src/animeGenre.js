import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


export default function animeGenre({ genre, handleGenre}) {

    function setGenre (genreNumber) {
        handleGenre(genreNumber.target.value);
    }


    return (
        <div>

            <FormControl style={{minWidth:120}} id="demo-controlled-open-select">
                <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                onChange={setGenre}
                value={genre}
                >
                <MenuItem value={''}><em>None</em></MenuItem>
                <MenuItem value={1}>Action</MenuItem>
                <MenuItem value={2}>Adventure</MenuItem>
                <MenuItem value={3}>Cars</MenuItem>
                <MenuItem value={4}>Comedy</MenuItem>
                <MenuItem value={5}>Dementia</MenuItem>
                <MenuItem value={6}>Demons</MenuItem>
                <MenuItem value={7}>Mystery</MenuItem>
                <MenuItem value={8}>Drama</MenuItem>
                <MenuItem value={9}>Ecchi</MenuItem>
                <MenuItem value={10}>Fantasy</MenuItem>
                <MenuItem value={11}>Game</MenuItem>
                <MenuItem value={12}>Hentai</MenuItem>
                <MenuItem value={13}>Historical</MenuItem>
                <MenuItem value={14}>Horror</MenuItem>
                <MenuItem value={15}>Kids</MenuItem>
                <MenuItem value={16}>Magic</MenuItem>
                <MenuItem value={17}>Martial Arts</MenuItem>
                <MenuItem value={18}>Mecha</MenuItem>
                <MenuItem value={19}>Music</MenuItem>
                <MenuItem value={20}>Parody</MenuItem>
                <MenuItem value={21}>Samurai</MenuItem>
                <MenuItem value={22}>Romance</MenuItem>
                <MenuItem value={23}>School</MenuItem>
                <MenuItem value={24}>Sci Fi</MenuItem>
                <MenuItem value={25}>Shoujo</MenuItem>
                <MenuItem value={26}>Shoujo Ai</MenuItem>
                <MenuItem value={27}>Shounen</MenuItem>
                <MenuItem value={28}>Shounen Ai</MenuItem>
                <MenuItem value={29}>Space</MenuItem>
                <MenuItem value={30}>Sports</MenuItem>
                <MenuItem value={31}>Super Power</MenuItem>
                <MenuItem value={32}>Vampire</MenuItem>
                <MenuItem value={33}>Yaoi</MenuItem>
                <MenuItem value={34}>Yuri</MenuItem>
                <MenuItem value={35}>Harem</MenuItem>
                <MenuItem value={36}>Slice Of Life</MenuItem>
                <MenuItem value={37}>Supernatural</MenuItem>
                <MenuItem value={38}>Military</MenuItem>
                <MenuItem value={39}>Police</MenuItem>
                <MenuItem value={40}>Psychological</MenuItem>
                <MenuItem value={41}>Thriller</MenuItem>
                <MenuItem value={42}>Seinen</MenuItem>
                <MenuItem value={43}>Josei</MenuItem>
                </Select>
            </FormControl>
        </div>
    )

}
