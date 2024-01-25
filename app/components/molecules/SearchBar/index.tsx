import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, TextField } from '@radix-ui/themes'
import React, { ChangeEventHandler } from 'react'

type Props = {
    handleChange: ChangeEventHandler<HTMLInputElement>,
}

const SearchBar = ({ handleChange }: Props) => {
    return (
        <Box style={{ width: 400 }}>
            <TextField.Root >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Search a card…" onChange={handleChange} />
            </TextField.Root>
        </Box>
    )
}

export default SearchBar