import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

    const [ translatedText, setTranslatedText ] = useState('');
    const [ debouncedText, setDebouncedText ] = useState('');

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        //cleanup function to cancel this timer
        return () => {
            clearInterval(timeoutId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    q: debouncedText,
                    target: language.value
                }
            });

            setTranslatedText(data.data.translations[0].translatedText);
        }
        doTranslation();
    },[language, debouncedText]);

    return (
        <div className="ui header">{translatedText} </div>
    );
};

export default Convert;