import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

export default function EventsPage() {
  const data = useLoaderData();

  // if(data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events!' },
      {
        status: 500,
      }
    );
    // throw new Response(JSON.stringify({ message: 'Could not fetch events!' }), {
    //   status: 500,
    // });

    // return {isError: true, message: 'Could not fetch events'}
  } else {
    return response;
  }
}