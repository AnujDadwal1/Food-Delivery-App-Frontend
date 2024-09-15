import { useState } from "react";
const Section = ({title, description,isVisible,setIsVisible})=>{
  return(
      <div className="border border-black p-2 m-2">
       <h3 className="text-xl font-bold">{title}</h3>
       {
       isVisible?
       <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button> :
       <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>
      } 
       {isVisible && <p>{description}</p>}
      </div>      
   );
};

const Instamart =()=>{
   const [visibleSection ,SetVisibleSection]=useState();
    return(
     <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      <Section title={"About InstaMart"}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
      isVisible ={visibleSection==="about"}
      setIsVisible={()=>
         SetVisibleSection(visibleSection==="about"?false:"about")
      }
      />
       <Section title={"Team InstaMart"}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
      isVisible ={visibleSection==="team"}
      setIsVisible={()=>
         SetVisibleSection(visibleSection==="team"?false:"team")
      }
      />
      <Section title={"Career"}
      description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
      isVisible ={visibleSection==="career"}
      setIsVisible={()=>
         SetVisibleSection(visibleSection==="career"?false:"career")
      }
      />
      
        {/* <AboutInstaMart/>
        <DetailsofInstaMart/>
        <Team/>
        <Product/>
        <Careers/> */}
     </div>   
);
};

export default Instamart;