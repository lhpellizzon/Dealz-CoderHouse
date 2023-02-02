function CategoryItemList({ categoryName, id, imageUrl }) {
  return (
    <div className="relative flex flex-col justify-center items-center px-4 min-w-[80%] sm:min-w-[30%] h-60 overflow-hidden flex-auto rounded-2xl hover:cursor-pointer">
      <div className="absolute w-full h-full transition-all duration-100 ease-in-out bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <a
        className="flex flex-col gap-3 text-center z-10 bg-white border-2 border-slate-900 opacity-80 py-2 px-5"
        tabIndex="0"
        href="/shop"
      >
        <h2 className="text-xl font-normal">{categoryName}</h2>
        <p className="text-sm font-extralight">Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryItemList;