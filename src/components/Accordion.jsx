import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { IoMdAdd } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

const CustomAccordion = props => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const handleAccordionToggle = () => {
    setIsAccordionOpen(prev => !prev)
  }

  return (
    <Accordion className='p-2' expanded={isAccordionOpen}>
      <AccordionSummary
        expandIcon={isAccordionOpen ? <RxCross2 /> : <IoMdAdd />}
        aria-controls='panel1-content'
        id='panel1-header'
        className='font-bold'
        onClick={handleAccordionToggle}>
        {props.title}
      </AccordionSummary>
      <AccordionDetails className='p-2'>{props.text}</AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion
