import { FC } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = ['PRIVATE_ROOM', 'SHARED_ROOM', 'PRIVATE_APARTMENT']

interface Props {
  stay: string[]
  setStay: (stay: string[]) => void
}

const DropCheck: FC<Props> = ({ stay, setStay }) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[]

    if (value.length === 1 && value[0] === 'ALL_TYPES_OF_STAY') {
      setStay([])
    } else {
      setStay(value.filter(option => option !== 'ALL_TYPES_OF_STAY'))
    }
  }

  return (
    <div>
      <div style={{ width: '10em' }}>
        <FormControl>
          <Select
            color='primary'
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox'
            multiple
            value={stay}
            onChange={handleChange}
            input={<OutlinedInput label='Tag' />}
            renderValue={(selected: string[]) => selected.join(', ')}
            MenuProps={MenuProps}
            className='w-[10em] h-[2em] rounded-0 MuiFieldBorder hover:border-zinc-900 active:border-zinc-900 focus:border-zinc-900'>
            <MenuItem value='ALL_TYPES_OF_STAY'>
              <ListItemText primary='All types of stay' />
            </MenuItem>
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={stay.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default DropCheck
