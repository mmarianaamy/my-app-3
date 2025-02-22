import Link from "next/link";

export default function NavBar () {
    return (
        <div className="flex flex-row justify-evenly bg-gray-800 p-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/page2"}>Page 2</Link>
            <Link href={"/signup"}>Sign Up</Link>
        </div>
    )
}