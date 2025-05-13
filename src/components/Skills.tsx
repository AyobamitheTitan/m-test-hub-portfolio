const skillsList = [
    "React",
    "Go",
    "Python",
    "Angular",
    "Java"
]

export default function Skills() {
    return (
        <>
            <div className="px-10">
                <h2 className="text-2xl">Skills</h2>
                <hr className="bg-cyan-900" />
                <div className="md:grid md:grid-cols-3">
                    {skillsList.map((skill, index) => (
                        <div key={index} className="flex justify-center md:w-32 m-2 h-10 bg-cyan-800 text-center items-center rounded">{skill}</div>
                    ))}
                </div>
            </div>
        </>
    )
}