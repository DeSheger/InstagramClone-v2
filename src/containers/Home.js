import React from "react";
import Menu from "../components/menu";
import PostRenderer from "../components/postRenderer";
export default class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <Menu />
                <PostRenderer />
            </div>
        );
    }
}