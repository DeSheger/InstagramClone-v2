import React from "react";
import Menu from "../components/menu";
import PostRenderer from "../components/postRenderer";
import { useState } from "react";

export default function Favourite(props) {

    const [descActive, setDescActive] = useState(false);

    return (
        <div className="favourite">
            <Menu />
            <PostRenderer descActive={descActive} row={true}/>
        </div>
    );

}