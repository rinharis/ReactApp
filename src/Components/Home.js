import React from "react";
import Hello from "./Hello";

function Home() {
    const fakeName = "Guy";
    const currentPage = "Home";
    return (
        <>
            <Hello name={fakeName} page={currentPage} />
        </>
    )
}
export default Home;