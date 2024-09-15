const Shimmer = () => {
    return (
      <div data-testid="shimmer" className="flex flex-wrap">
       {Array(10)
       .fill("")
       .map((e , index)=>
       <div  className="w-[200px] h-[310px] rounded-[11%] bg-[#c7c7c7] border border-black m-[14px]" key={index}></div>)}
      </div>
    );
  };
 export default Shimmer;
  