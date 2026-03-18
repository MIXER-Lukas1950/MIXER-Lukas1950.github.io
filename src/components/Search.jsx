import {useState} from 'react';

const SearchItems = [
    "aardvark",
    "banana",
    "cannon",
    "elephant",
    "fox",
    "goose",
    "hen",
    "ibis",
    "jackal"
]

const SearchBarComponent = ({search, setSearch}) => {
    return (

    )
};

const SuggestionListComponent = ({search, items}) => {
    return {
        <ul>
            {
                items.map({item, index}

                ))
            }
        </ul>
    }

}

export default function Search () {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = SearchItems.filter( item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
        <SearchBarComponent = {searchTerm} setSearch = {setSearchTerm} />
        <SuggestionListComponent />
        </div>
    )
}