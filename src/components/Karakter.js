import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import './Karakter.css'

const Karakter = (props) => {
    const { character, films } = props;
    
    const [open, setOpen] = useState('');
    const [openFilms, setOpenFilms] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const toggleFilms = (id) =>  {
        if(openFilms===id) {
            setOpenFilms();
        }
        else {
            setOpenFilms(id)
        }
    }

    return (
        <>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">{character.name}</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <p>Gender : {character.gender}</p>
                        <p>Height : {character.height}</p>
                        <p>Mass : {character.mass}</p>
                        <p>Birth Year : {character.birth_year}</p>
                        <p>Eyecolor : {character.eye_color}</p>
                        <p>Hair Color : {character.hair_color}</p>
                        <p>Skin Color : {character.skin_color}</p>
                        <span>Appears in {character.films.length} films</span>
                        <div>
                            <Accordion flush open={openFilms} toggle={toggleFilms}>
                               { films && films.map((film)=> <AccordionItem key={film.url}>
                                    <AccordionHeader targetId={film.url}>{film.title}</AccordionHeader>
                                    <AccordionBody accordionId={film.url}>
                                        <p>Gender : {film.opening_crawl}</p>
                                        <p>Directed by : {film.director}</p>
                                        <p>Produced by : {film.producer}</p>
                                        <p>Release Date : {film.release_date}</p>
                                    </AccordionBody>
                                </AccordionItem>
                               )}
                            </Accordion>
                        </div>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </>

    );
}

export default Karakter;