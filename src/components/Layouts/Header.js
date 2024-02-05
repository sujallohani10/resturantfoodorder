import {Fragment} from "react";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
        <h1>Mero Khaja</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}> {/* used square bracket coz of the dash in main-image */}
      <img src={mealsImage} alt="Delicious Food order app" />
    </div>
  </Fragment>;
};

export default Header;
