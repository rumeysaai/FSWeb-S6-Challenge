import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import './Karakter.css'

const Films = (props) => {
    const { film } = props;
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem >
                    <AccordionHeader targetId="1">{film.title}</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <p>Gender : {film.opening_crawl}</p>
                        <p>Directed by : {film.director}</p>
                        <p>Produced by : {film.producer}</p>
                        <p>Release Date : {film.release_date}</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Films;