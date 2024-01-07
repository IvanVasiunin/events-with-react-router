import { useEffect } from 'react';

export default function EventsPage() {
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3000/events', {method: 'POST', headers:{'Content-Type': 'application/json'}}).then(res => res.json()).then(data => console.log(data))
      
    }

    getData()
  }, []);

  return <h1>Events page</h1>;
}
