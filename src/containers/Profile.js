import Menu from "../components/menu";
import ProfileInfo from "../components/profileInfo";
import PostRenderer from "../components/postRenderer";
import { useState } from "react";

export default function Profile(props) {
  const [descActive, setDescActive] = useState(false);

  return (
    <div className="profile">
      <Menu />
      <ProfileInfo />
      <PostRenderer descActive={descActive} row={true}/>
    </div>
  );

}