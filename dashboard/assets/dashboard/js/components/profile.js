import React from 'react'
import { debug, callApiWithJwt } from '../lib.js'
import { config } from '../config.js'
import { hashHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Button, Form, Container, Grid, Message, Card, Image, Statistic, Icon } from 'semantic-ui-react'

export class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        callApiWithJwt('/user/api/view_profile',
            'GET',
            null,
            (response) => {
                // List of users will have exacatly 1 element
                this.setState(response);
                document.title = response.username;
            },
            (error) => {
                hashHistory.push('/login/');
            }
        );
    }

    render() {
        debug("profile", this.state);
        var advertisingMessage = "Funds available";
        var publisherMessage = "Earnings available";

        const funds = this.state.advertising_funds - this.state.advertising_burn;
        const earnings = this.state.publisher_earnings - this.state.publisher_payout;

        if (this.state.user && this.state.user.username) {
            var body = (
                <Grid centered verticalAlign='middle' columns={1}>
                    <Grid.Row verticalAlign='middle' columns={5} style={{ minHeight: '70vh' }}>
                        <Grid.Column verticalAlign='middle'>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>{this.state.user.username}</Card.Header>
                                    <Card.Description>
                                        <Statistic>
                                            <Statistic.Value style={{ color: funds < 10 ? 'red' : 'green' }}>{funds}<Icon name="dollar" size="mini" /></Statistic.Value>
                                            <Statistic.Label>Funds</Statistic.Label>
                                        </Statistic>
                                        <Statistic>
                                            <Statistic.Value>{earnings}<Icon name="dollar" size="mini" /></Statistic.Value>
                                            <Statistic.Label>Earnings</Statistic.Label>
                                        </Statistic>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button color='teal' as={Link} to='/dashboard/advertiser/'>Advertiser Dashboard</Button>
                                        <Button color='yellow' as={Link} to='/dashboard/publisher/'>Publisher Dashboard</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        } else {
            /**
             * The API call hasn't succeeded yet. TODO Show a spinner'
             */
            var body = <div key="notloaded"></div>
        }
        return (
            <main className="Site-content" style={{ backgroundColor: '#008FCB', minHeight: '100vh' }}>
                {body}
            </main>
        );
    }
}
