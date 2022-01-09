import Menu from "../components/menu";
import ProfileInfo from "../components/profileInfo";
import PostRenderer from "../components/postRenderer";

export default function Profile(props) {
  return (
    <div className="profile">
      <Menu />
      <ProfileInfo />
      <PostRenderer />
    </div>
  );

}