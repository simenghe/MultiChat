import React from 'react';
class NavBar extends React.Component {
    render() {
        return (
            <nav class="green lighten-1" role="navigation">
                <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"></a>
                    <ul class="left hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}
export default NavBar;