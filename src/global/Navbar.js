import React from 'react';



class Navbar extends React.Component{


    render() {
        return(
           <nav className="main">
                <div className="navbar-list">
                       <a id="home-item" href="http://localhost:3001/home">

                            <span className="title-home">Home</span>
                       </a>
                   
                  
                        <a id="profile-item" href="http://localhost:3001/profile">

                            <span className="title-profile">Profile</span>
                        </a>

                        <div id="middle-item">
                            <img src="../pokestay2.png"  alt="pokestaylogo"/>
                        </div>
                   
                        <a id="pokedex-item" href="http://localhost:3001/pokedex">

                            <span className="title-pokedex">Pokédex</span>
                        </a>
                   
                        <a id="logout-item" onClick={this.props.logOut} href="http://localhost:3001/login">

                            <span className="title-logout">Log Out</span>
                        </a>
                    </div>
           </nav>
      )
    }

}


export default Navbar;