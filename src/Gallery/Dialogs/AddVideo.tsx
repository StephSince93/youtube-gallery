/*
 name: "Sample Vid",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
*/

import { useVideoContext } from "../context/videoContext";
type Props = {
    setOpen: (openModal: boolean) => (boolean);
 }

const AddVideo = (props: Props) => {
    const { addVideo } = useVideoContext();
    const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
        // TODO: Add validation to form fields
        e.preventDefault();
        const target = e.target as typeof e.target & {
          vname: { value: string };
          url: { value: string };
        };

        const now = new Date().getTime();
    
        addVideo(target.vname.value, target.url.value, now);

        //TODO: Add response to user
        props.setOpen(false);
    } catch(e) {
        //Handle Error
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "200px",
          width: "200px",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ width: "80%", padding: "2px", textAlign: "center" }}>
              <label htmlFor="vname">Video Name:</label>
              <input
                style={{ height: "30px" }}
                type="text"
                id="vname"
                name="vname"
              />
            </div>
            <div
              style={{
                width: "80%",
                padding: "2px",
                margin: "px",
                textAlign: "center",
              }}
            >
              <label htmlFor="url">Url:</label>
              <input
                style={{ height: "30px" }}
                type="text"
                id="url"
                name="url"
              />
            </div>
            <div
              style={{ width: "80%", paddingTop: "10px", textAlign: "center" }}
            >
              <input
                style={{ height: "30px" }}
                type="submit"
                value="Add Video"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVideo;
