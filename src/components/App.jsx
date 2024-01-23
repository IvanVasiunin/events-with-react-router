import EditEventPage from 'pages/EditEventPage';
import ErrorPage from 'pages/ErrorPage';
import EventDetailPage, {
  loader as eventDatailLoader,
  action as deleteEventAction,
} from 'pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from 'pages/EventsPage';
import EventsRoot from 'pages/EventsRoot';
import HomePage from 'pages/HomePage';
import NewEventPage, { action as newEventAction } from 'pages/NewEventPage';
import RootLayout from 'pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDatailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                { path: 'edit', element: <EditEventPage /> },
              ],
            },
            { path: 'new', element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
