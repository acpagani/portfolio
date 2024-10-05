function SkillCategory({ titulo, children }) {
    return ( 
        <>
            <div className="flex flex-col gap-3 bg-secondaryColor p-5 shadow-md shadow-secondaryColor select-none">
                <div>
                    <h1 className="text-hlColor font-bold text-2xl drop-shadow-md">{titulo}</h1>
                </div>
                <div className="flex flex-wrap gap-4">
                    {children}
                </div>
            </div>
        </>
     );
}

export default SkillCategory;