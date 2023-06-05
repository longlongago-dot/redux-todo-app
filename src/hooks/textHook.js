import { useState } from "react";

export default (initialValue = "") => {
    const [text, setText] = useState(initialValue);
    function reset() {
        setText("");
    }
    return [text, setText, reset]
}