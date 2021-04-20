import React from 'react';

const Article = (props) => {
  // let publishState = "";
  // if(props.isPublished){
  //   publishState = "非公開"
  // }else{
  //   publishState = "公開"
  // }
  return(
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked= {props.isPublished} id="check" onClick={()=>props.toggle()} />
    </div>
  )
};

export default Article;