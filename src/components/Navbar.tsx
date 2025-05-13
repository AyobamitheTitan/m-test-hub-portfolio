const navElements = [
    "About me",
    "Skills",
    "Hobbies and Interests",
    "Academic background",
    "Work Experience"
]

export default function Navbar(){
    return (
        <nav className="flex justify-between md:p-9 p-6 border-b border-b-cyan-800 ">
            <header className="text-3xl">Oluwatimilehin</header>
            <div className="md:flex items-center hidden">
                {navElements.map((element, index)=>(
                    <p key={index} className="ml-4"><a href="">{element}</a></p>
                ))}
            </div>
        </nav>
    )
}