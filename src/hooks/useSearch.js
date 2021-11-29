import { useState } from 'react';

export const useSearch = () => {

    const [valueSearch, setValueSearch] = useState(undefined);

    const handleInputSearch = ({ target }) => {
        setValueSearch(target.value);
    };

    return [ valueSearch, handleInputSearch ];
}
