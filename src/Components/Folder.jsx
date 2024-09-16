import { useState } from "react";
import File from "./File";

export default function Folder({ explorer }) {
  const [isFolded, setIsFolded] = useState(true);

  const folderItems = explorer.items.map((item) => {
    return (
      <li key={item.id}>
        {item.isFolder ? <Folder explorer={item} /> : <File name={item.name} />}
      </li>
    );
  });

  return (
    <div>
      <button onClick={() => setIsFolded(!isFolded)}>
        <span>📂{!isFolded ? "" : ""}</span>
        {explorer.name}
      </button>
      {isFolded ? null : <ul>{folderItems}</ul>}
    </div>
  );
}
