import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ChapteList from './components/ChapteList';
import ChapterDetails from './components/ChapterDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChapteList />,
    children: [
      {
        path: 'chapter/:id',
        element: (
          <>
            <ChapterDetails />
            <Outlet />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<ChapteList />} />
      <Route path="/chapter/:id" element={<ChapterDetails />} />
    </RouterProvider>
  </React.StrictMode>,
);
