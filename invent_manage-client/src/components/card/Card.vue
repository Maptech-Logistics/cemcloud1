<template>
    <div class="itemOne">
      <div class="imgWrapper">
        <img alt="category image" src="https://i.shgcdn.com/19200e5f-1079-4858-b5df-30b3a9d99ae5/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
      </div>
      <div class="textWrapper">
        <h3>availability</h3>
      </div>
    </div>
  </template>

  <style lang="scss" scoped>

.itemOne {
  margin: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height:fit-content;
  padding: 5px;
  cursor:grabbing;

  &:hover{
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .imgWrapper {
    width: 80px;
    height: 80px;
    border-radius: 1000px;
    border: 3px solid #387463;
    padding: 15px;
    margin: auto;
  
    > img {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
  
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  
  
  }
  
  
  .textWrapper {
    padding: 20px;   
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
    h3 {
      color: #387463d8;
      font-size: 23px;
      text-align: center;
      padding-top: 0px;
      text-decoration:overline;
      text-transform: capitalize;
    }
  
  }
  

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 5px;
    background-color: #387463;;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #2d584aa1;;
    }
  }
}


 /* smartphones, portrait iPhone, portrait 480x320 phones (Android & Iphones) */ 
 @media screen and (max-width:780px)  { 

    .itemOne{
      width: 15rem;
  margin: 0.3rem;

    }

    .textWrapper {
        color: #387463;

 }
 }


/* tablet, landscape iPad, lo-res laptops ands desktops */ 
@media only screen and (min-width:801px ) and (min-width: 768px){ 

    .itemOne{
      width: 12rem;
    }

}
  </style>
  