import React from "react";
import Menu from "../components/menu";
import PostRenderer from "../components/postRenderer";
import { useState } from "react";

export default function Home(props) {

    const [descActive, setDescActive] = useState(true);

    return (
        <div className="home">
            <Menu />
            <PostRenderer descActive={descActive} />
        </div>
    );

}