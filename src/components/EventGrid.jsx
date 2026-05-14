import React from 'react'
import events from '../data/events'
import EventCard from './EventCard'

const EventGrid = () => {
  return (
    <div className='flex gap-[22px] overflow-x-auto'>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  )
}

export default EventGrid