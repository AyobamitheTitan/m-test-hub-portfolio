export default function Hero(){
    return (
        <>
        <div className="flex justify-center items-center py-10 flex-col md:flex-row">
            <div className="w-56">
                <img src="src/assets/me.jpeg" className="rounded-full" alt="Image of me" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start md:ml-5">
                <p className="text-gray-400">Software developer</p>
                <h3 className="text-3xl">Oluwatimilehin Oyewo</h3>
                <p className="text-amber-50">I am an avid learning with a passion for building. <br/>I work as a full stack developer; this means that whatever your needs,<br/> frontend or backend, I'm your guy</p>
            </div>
        </div>
        </>
    )
}