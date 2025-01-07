import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isModalVisible, setisModalVisible] = useState(false);

  const openFormModal = () => {
    setisModalVisible(true);
  };

  const hideFormModal = (): void => {
    setisModalVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={openFormModal} />
      <main>
        <PostsList isPosting={isModalVisible} onStopPosting={hideFormModal} />
      </main>
    </>
  );
}

export default App;
