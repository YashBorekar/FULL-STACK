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
  return (
    <div>
    

    <div>
      <img src="panda.jpeg" alt="panda.jpeg"/>
    </div>
    <div>
     <h2>Kung Fu Panda</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt praesentium aspernatur minima, ullam illum, error voluptatibus quidem veritatis, impedit amet ipsa hic totam perspiciatis voluptatum culpa ex maxime facere aliquam possimus non deserunt neque quas!</p>
     <h1>Ratings : 9.0 / 10</h1>
    </div>
 
  </div>
  );
};
