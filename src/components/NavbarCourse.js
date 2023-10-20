export default function NavbarCourse() {
    return (
        <>
        <div class="z-10 flex justify-between items-center w-full h-20 text-white bg-[#02013d] fixed px-10 border-b shadow-xl">
            <div>
                <h1 className="text-3xl ml-4">ЦР 2.0</h1>
            </div>
            <a href="/" className="px-6 py-2 text-xl cursor-pointer font-bold hover:scale-105 duration-200">Главная</a>
        </div>
        </>
    );
}