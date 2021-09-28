import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import {makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from "../../assets/logo.svg";


const myStyle = makeStyles(theme => ({
  toobarMargin:{
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },

  logo: {
    height: '7em'
  },

  logoContainer: {
    padding: 0,
  },


  tabContainer:{
    marginLeft: 'auto'
  },

  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  }, 

  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px', 
    height: '45px'
  }
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  

export default function Header(props) {
  const style = myStyle();
  const [activeTab, setActiveTab] = useState(0);
  const tabChangeHandler = (event, activeTab) => {
    setActiveTab(activeTab);
  }

  useEffect(()=>{
    switch (window.location.pathname) {
      case "/" && activeTab !== 0 :
        setActiveTab(0);
        break;
      case "/services" && activeTab !== 0 :
        setActiveTab(0);
        break;
      case "/the-revoluiton" && activeTab !== 2 :
        setActiveTab(2);
        break;
      case "/about" && activeTab !== 3 :
        setActiveTab(3);
        break;
      case "/contact" && activeTab !== 4 :
        setActiveTab(4);
        break;
      case "/estimate" && activeTab !== 5 :
        setActiveTab(5);
        break;
    } 

  },[activeTab]);

    return (
      <React.StrictMode>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters={true}>
              <Button className={style.logoContainer} component={Link} to='/' onClick={() => {setActiveTab(0)}}>
                <Logo alt="logo" className={style.logo} />
              </Button>
              <Tabs
                className={style.tabContainer}
                value={activeTab}
                onChange={tabChangeHandler}
                indicatorColor="primary"
              >
                <Tab
                  className={style.tab}
                  component={Link}
                  to="/"
                  label="Home"
                />
                <Tab
                  className={style.tab}
                  component={Link}
                  to="/services"
                  label="Services"
                />
                <Tab
                  className={style.tab}
                  component={Link}
                  to="/the-revolution"
                  label="The Revolution"
                />
                <Tab
                  className={style.tab}
                  component={Link}
                  to="/about"
                  label="About"
                />
                <Tab
                  className={style.tab}
                  component={Link}
                  to="/contact"
                  label="Contact"
                />
              </Tabs>
              <Button
                variant="contained"
                color="secondary"
                className={style.button}
              >
                Free Estimate
              </Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={style.toobarMargin} />
      </React.StrictMode>
    );

}