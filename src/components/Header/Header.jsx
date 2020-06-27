import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import React from "react";
import { Menu } from "semantic-ui-react";
import "./LanguageDropdown.css";

import "./Header.css";

const Header = ({ onLanguageChange }) => (
  <>
    <header>
      <Menu>
        <Menu.Item name="top-headlines" as={Link} to="/">
          Top Headlines
        </Menu.Item>

        <Menu.Item name="korona-news" as={Link} to="/CoronaNewsPage">
          CoronaVirus News
        </Menu.Item>

        <Menu.Menu position="right">
          <LanguageDropdown onLanguageChange={onLanguageChange} />
        </Menu.Menu>
      </Menu>
    </header>
  </>
);

export default Header;
// {/* <header>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/CreepyJarNewsPage">Creepy Jar News</Link>
//       </li>
//       <li>
//         <Link to="/help">Help</Link>
//       </li>
//     </ul>

//   </nav>
// </header> */}
