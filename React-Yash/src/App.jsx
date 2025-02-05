import React from "react";
export const App = () => {
  // return [<NetFlixCard key="1"/>,<NetFlixCard ke="2"/>];
  return ( 
      // <React.Fragment>
      <> 
      <NetFlixCard/>
      <NetFlixCard/>
      <NetFlixCard/>
      <NetFlixCard/>
      </>
    //  </React.Fragment> 
  );
};

const NetFlixCard = () => {
  const name = "Kung Fu Panda";
  // const rating = ;
  const Summary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt praesentium aspernatur minima, ullam illum, error voluptatibus quidem veritatis, impedit amet ipsa hic totam perspiciatis voluptatum culpa ex maxime facere aliquam possimus non deserunt neque quas!";
  const returnGenre = () =>{
    const genre = "Animation Comedy";
    return genre;
  };
  
  return (
    <div>  
    <div >
      <img src="panda.jpeg" alt="panda.jpeg"/>
    </div>
    <div>
     <h2>Name : {name}</h2>
     <p>Summary : {Summary}</p>
     <h2>Ratings :{5+4.1} </h2>
     <h3>Genre : {returnGenre()}</h3>
    </div>
 
  </div>
  );
};
