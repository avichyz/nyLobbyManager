import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '../modules/home/home';
import MapContainer from '../modules/map/MapContainer';
import styles from './shell.scss'
import BrowseContainer from '../modules/browse/BrowseContainer';

class Shell extends Component {
    render() {

        return (
            <div className={styles.root}>
                <AppBar position="static" color="default" className={styles.appBar}>
                    <Toolbar>
                        <Link to='/'><Button>בית</Button></Link>
                        {/* allows tenants to set their data - current tenant + owner */}
                        {/* <Link to='/browse'><Button>עדכון פרטים אישיים</Button></Link> */}
                        {/* allows tenants to offer divrey torah */}
                        {/* <Link to='/browse'><Button>הצעת דבר תורה</Button></Link> */}
                        {/* <Link to='/browse'><Button>ניהול RSS</Button></Link> */}
                        {/* allows managers to set announcements */}
                        <Link to='/browse'><Button>ניהול הודעות הוועד</Button></Link>
                        {/* allows managers to set divrey torah per saturday */}
                        {/* <Link to='/browse'><Button>ניהול שבתות וחגים</Button></Link> */}
                        {/* allows managers to update takalot and perhaps one day invite the achzaka
                         company to watch and set statuses or to reply*/}
                        {/* <Link to='/browse'><Button>ניהול תקלות בבניין</Button></Link> */}
                        {/* allows manager to update data of tenant and lock it - per tenant, per data item*/}
                        {/* <Link to='/browse'><Button>ניהול פרטי דיירים</Button></Link> */}
                    </Toolbar>
                </AppBar>
                <div className={styles.content}>
                    <Switch>
                        <Route exact path='/' component={MapContainer} />
                        <Route path='/browse' component={BrowseContainer} />
                    </Switch>
                </div>
            </div>

        )
    }
}

export default Shell;