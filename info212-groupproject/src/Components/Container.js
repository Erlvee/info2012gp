/*import React, {useState} from 'react';
import LoginScreen from './LoginScreen.js'
import MainContent from './MainContent.js'
import RenderRestaurant from './RenderRestaurant.js'
import restaurantData from './RestaurantData.js'
import Footer from './Footer.js'
import Calendar from './Calendar.js'
//import Calendar from './Calendar.js/index.js'

function Container() {
  const [initLogin, setLogin] = useState(true);
  const [initMain, renderMain] = useState(false);
  const [initRestaurant, renderRestComponent] = useState(false);

  const restData = restaurantData.map(item => <RenderRestaurant key={item.id} restaurant={item} />);
  

  return (
    <div id="container">
        
        {/*<Calendar />/initLogin && <LoginScreen 
        initLogin={initLogin}
        setLogin={setLogin} 
        initMain={initMain} 
        renderMain={renderMain}/>}

        {!initLogin && initMain && <MainContent 
        initMain={initMain} 
        renderMain={renderMain} 
        renderRestComponent={renderRestComponent}/>}
        <div className="renderRest">
        {!initMain && initRestaurant && <h3 style={{display:"flex", marginBottom: "25px", marginLeft: "25px"}}>Sort by: </h3>} 
        {!initMain && initRestaurant && restData }
        {!initMain && initRestaurant && <Footer/> }
        </div>

       
    </div>
  );
}

export default Container;*/