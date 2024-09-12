import FooterContainer from "./Containers/FooterContainer";
import LibraryContainer from "./Containers/LibraryContainer";
import SearchContainer from "./Containers/SearchContainer";
const GalleryContainer = () => (
  <>
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <SearchContainer />
      <LibraryContainer />
    </div>
    <FooterContainer />
  </>
);

export default GalleryContainer;
