import Link from "next/link";

export default function NavBar () {
    return (
        <div className="flex flex-row justify-evenly bg-gray-800 p-6">
            <Link href={"/"}>Home</Link>
        </div>
    )
}