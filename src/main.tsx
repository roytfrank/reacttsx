import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App, { loader as postsLoader } from "./routes/App.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: postsLoader,
        children: [
          { path: "/create", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);
//can also be as create-post or :id relative to base path '/'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
