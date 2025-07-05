import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Index from './outlets/index';
import Projects from './outlets/projects';

const router = createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: Layout,
    children: [
      { index: true, Component: Index },
      { path: "projects/:projectId", Component: Projects },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
