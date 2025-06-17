function Categories(){
    return(
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen">
        <div className="container mx-auto flex flex-wrap items-center justify-center p-12">
            <h1 className="text-6xl font-semibold text-center">Categories</h1>
            <div className="flex flex-wrap justify-center">
                <button className="m-4 p-2 text-white rounded-md bg-black hover:bg-blue-700">Fiction</button>
                <button className="m-4 p-2 text-white rounded-md bg-black hover:bg-blue-700">Non-Fiction</button>
                <button className="m-4 p-2 text-white rounded-md bg-black hover:bg-blue-700">........</button>
            </div>
        </div>
    </div>
)};
export default Categories;
