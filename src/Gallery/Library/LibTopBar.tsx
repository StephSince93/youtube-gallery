import { useEffect, useState } from "react";
import AddVideo from "../Dialogs/AddVideo";
import { getVideos } from "../../http/library";

const LibTopBar = () => {
  const [openForm, setOpenForm] = useState(false);


  useEffect(() => {

    const test = async function() {
        const res = await getVideos();
        console.log(res);

    }
    test();
  }, []);

  const clickedButton = (e: React.SyntheticEvent): void => {
    setOpenForm(!openForm);
  };

  const setOpen = (openModal: boolean) => {
    setOpenForm(openModal);
    return true
  }
  return (
    <>
      <div
        style={{
          height: "20%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid grey",
        }}
      >
        <h3 style={{ color: "white" }}>Recently Added</h3>
        <button
          style={{
            color: "white",
            backgroundColor: "#1F1F1F",
            height: "40px",
            borderRadius: "5px",
          }}
          onClick={clickedButton}
        >
          Add New Video
        </button>
      </div>
      {openForm && <AddVideo setOpen={(open) => setOpen(open)}/>}
    </>
  );
};

export default LibTopBar;
