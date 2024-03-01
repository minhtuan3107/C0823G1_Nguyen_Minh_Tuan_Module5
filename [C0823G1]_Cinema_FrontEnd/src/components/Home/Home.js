import {Link} from "react-router-dom";

export default function Home() {
    const a = 1;
    return (
        <>
            <Link className="button" to={`detail/${a}`}>Detail</Link>
        </>
    )
}