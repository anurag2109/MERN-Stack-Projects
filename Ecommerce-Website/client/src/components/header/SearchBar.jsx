import React from 'react';
import { InputBase, makeStyles, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
    searchbar:{
        background: 'white',
        width: '35%',
        display: 'flex',
        marginLeft: 15,
        borderRadius: 3
    },
    searchIcon:{
        display: 'flex',
        color: 'blue',
        marginLeft: 'auto',
        padding: 5
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
})
const SearchBar = () => {
    const classes = useStyle();

    return (

        <Box className={classes.searchbar}>
            <InputBase
                 classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  placeholder='Search for products, brands and more'
            />
            <Box className={classes.searchIcon}>
                <SearchIcon/>
            </Box>
        </Box>
    )
}

export default SearchBar
