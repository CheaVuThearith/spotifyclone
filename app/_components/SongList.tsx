import React from "react";
import Card from "./Card";

type Props = {};

const SongList = (props: Props) => {
  return (
    <>
      <tr className="h-20 relative after:inset-0 after:absolute after:transition-all after:hover:bg-[#ffffff17] after:rounded-lg">
        <td className="text-center">1</td>
        <td>
          <Card type="small" />
        </td>
        <td>Album Name</td>
        <td>dd:mm:yy</td>
        <td>mm:ss</td>
      </tr>
    </>
  );
};

export default SongList;
