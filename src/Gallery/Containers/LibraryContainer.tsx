import LibTopBar from "../Library/LibTopBar"; 
import LibVideoLayout from "../Library/LibVideoLayout";
const LibraryContainer = () => (
    <div style={{height:'90%', width: '80%', position: 'absolute', right: 0, backgroundColor: '#1F1F1F'}}>
        
        <div style={{width: '100%', height: '100%'}}>
            <LibTopBar/>
            <LibVideoLayout />
        </div>
    </div>
)

export default LibraryContainer;