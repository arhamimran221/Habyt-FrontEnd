import { FC, useState, ReactNode } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import FooterImage from '../assets/images/footer/habytfooterlogo.svg'
import Facebook from '../assets/images/footer/facebook.svg'
import Instagram from '../assets/images/footer/instagram.svg'
import Twitter from '../assets/images/footer/twitter.svg'
import Linkedin from '../assets/images/footer/linkedin.svg'

interface Props {
  isBlackFooter: boolean | undefined
}

const Footer: FC<Props> = ({ isBlackFooter }) => {
  const [language, setLanguage] = useState<string>('ES')

  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    setLanguage(event.target.value as string)
  }

  const europe: string[] = [
    'Amsterdam',
    'Barcelona',
    'Berlin',
    'Frankfurt',
    'Hamburg',
    'Lisbon',
    'Madrid',
    'Milan',
    'Modena',
    'Paris',
    'Turin',
    'Munich',
    'Rotterdam',
    'Stuttgart',
    'Dusseldorf',
    'Zurich',
    'The Hague',
    'Graz',
  ]

  const unitedStates: string[] = [
    'Baltimore',
    'Berkeley',
    'Birmingham',
    'Chicago',
    'Jersey City',
    'Los Angeles',
    'New York City',
    'Oakland',
    'Philadelphia',
    'Salt Lake City',
    'San Francisco',
    'St. Petersburg',
    'Washington, DC',
  ]

  return (
    <div
        className={`${
          isBlackFooter ? 'bg-[#30303A] text-white mb-[-6%]' : 'text-stone-700'
        }`}>
      <div className='habyt-container'>
        <div className='footer lg:w-full w-[90%] m-auto p-2 lg:p-8 pt-16 flex justify-between flex-wrap gap-16 mx-[10px] lg:mx-[0px] '>
          <div className='flex flex-col gap-4 flex-wrap'>
            <div>
              <h1 className='text-left text-2xl font-bold h-[1.8rem]'>
                Locations
              </h1>
              <p className='text-left font-bold text-lg mt-4'>Europe</p>
              <div className='h-[440px] min-w-[300px] md:h-[100%] flex flex-col gap-4 flex-wrap'>
                {europe.map((country, index) => (
                  <p
                    key={index}
                    className='cursor-pointer w-fit hover:border-b hover:border-zinc-900'>
                    {country}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 flex-wrap'>
            <p className='text-left font-bold text-lg mt-4'>United States</p>
            {unitedStates.map((country, index) => (
              <p
                key={index}
                className='cursor-pointer w-fit hover:border-b hover:border-zinc-900'>
                {country}
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-4 flex-wrap'>
            <p className='text-left font-bold text-lg mt-4'>Asia</p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900'>
              Hong Kong
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900'>
              Singapore
            </p>
          </div>
          <div className='flex flex-col gap-4 flex-wrap'>
            <h1 className='text-left text-2xl font-bold h-[1.8rem]'>Company</h1>
            <p className='text-left font-bold text-lg mt-4'></p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              About Habyt
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Help Center
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Career
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Terms
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Imprint
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Privacy
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Press
            </p>
          </div>
          <div className='flex flex-col gap-4 flex-wrap'>
            <h1 className='text-left text-2xl font-bold h-[1.8rem]'>Community</h1>
            <p className='text-left font-bold text-lg mt-4'></p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              For Landlords
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Universities
            </p>
            <p className='cursor-pointer w-fit hover:border-b hover:border-zinc-900 active:text-purple-500'>
              Corporates
            </p>
          </div>
        </div>
        <hr className='border-[1px] border-[#E1E1E1] w-[100%] mx-auto my-0' />
        <div className='w-full flex flex-col p-8 max-w-[1440px] my-0 mx-auto'>
          <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-4'>
            <p className='w-fit text-center hidden md:block'>
              © 2024 Habyt. All rights reserved.
            </p>
            <div className='flex items-center gap-4 flex-wrap flex-col md:flex-row'>
              <div className='flex'>
                <a href='/#' className='text-stone-700 m-[auto] ml-[16px]'>
                  <img src={Facebook} alt='facebook' />
                </a>
                <a href='/#' className='text-stone-700 m-[auto] ml-[16px]'>
                  <img src={Twitter} alt='twitter' />
                </a>
                <a href='/#' className='text-stone-700 m-[auto] ml-[16px]'>
                  <img src={Instagram} alt='instagram' />
                </a>
                <a href='/#' className='text-stone-700 m-[auto] ml-[16px]'>
                  <img src={Linkedin} alt='linkedin' />
                </a>
              </div>
              <div className='hidden md:block'>
                <div>
                  <FormControl
                    variant='standard'
                    color='secondary'
                    sx={{ m: 1, minWidth: 80, margin: 'auto' }}>
                    <Select
                      className='pl-[15px] border-[1px] border-black'
                      labelId='demo-simple-select-standard-label'
                      id='demo-simple-select-standard'
                      value={language}
                      onChange={handleChange}
                      label='Age'>
                      <MenuItem value='EN'>EN</MenuItem>
                      <MenuItem value='ES'>ES</MenuItem>
                      <MenuItem value='IT'>IT</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <p className='w-fit text-center text-[#88888E] text-[14px] font-normal md:hidden'>
                    © 2024 Habyt. All rights reserved.
                  </p>
                </div>
              </div>
              <div className='block md:hidden'>
                <FormControl
                  variant='standard'
                  color='secondary'
                  sx={{ m: 1, minWidth: 80, margin: 'auto' }}>
                  <Select
                    className='pl-[15px] border-[1px] border-black'
                    labelId='demo-simple-select-standard-label'
                    id='demo-simple-select-standard'
                    value={language}
                    onChange={handleChange}
                    label='Age'>
                    <MenuItem value='EN'>EN</MenuItem>
                    <MenuItem value='ES'>ES</MenuItem>
                    <MenuItem value='IT'>IT</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='block md:hidden'>
                <p className='w-fit text-center text-[#88888E] text-[14px] font-normal md:hidden'>
                  © 2024 Habyt. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={FooterImage}
          alt='Footer'
          className='w-full object-contained pt-8'
        />
      </div>
    </div>
  )
}

export default Footer
