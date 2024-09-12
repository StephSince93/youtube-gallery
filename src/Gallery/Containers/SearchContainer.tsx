const SearchContainer = () => (
    <div
      style={{
        height: "90%",
        width: "20%",
        position: "absolute",
        left: 0,
        backgroundColor: "#252526",
        borderRight: '1px solid white'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            height: "100px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 style={{ color: "#ADFF00" }}>(Logo Here) Youtube Videos</h2>
        </div>
        <div
          style={{
            height: "100px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 style={{ color: "#ADFF00" }}>(Search Icon) Search</h2>
        </div>
        <div>
          <h2 style={{ color: "#ADFF00" }}>(Library Icon) Your Library</h2>
        </div>
        <hr />
  
        <div style={{bottom: 0, position: 'absolute'}}>
          <h2 style={{ color: "#ADFF00" }}>(Home Icon)Welcome to the Video Library!</h2>
        </div>
      </div>
    </div>
  );
  
  export default SearchContainer;
  