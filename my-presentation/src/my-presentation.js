// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
  Typeface,
  Image,
} from 'spectacle';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#46344E',
    secondary: '#5A5560',
    tertiary: '#9D8D8F',
    quartenary: '#FAED26',
    five: "#FEFFFF",
    six: "#F7D08A",
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
    tertiary: {
      name: 'Droid Serif',
      googleFont: true,
      styles: ['400', '700i']
    },
    quartenary: {
      name: 'Roboto',
      googleFont: true,
      styles: ['400', '700i']
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary" >
          <Heading textColor="six" bold >Haiden Deaton</Heading>
          <BlockQuote>
            <Quote textColor="tertiary" textAlign='right' italic textFont="secondary" >Just a guy with a dream to build a better web.</Quote>
          </BlockQuote>
        </Slide>
        <Slide textColor="quartenary">
          <Heading fill textAlign='left'> Background </Heading>
          <List textColor="five" textFont="quartenary" >
            <ListItem>Raised in Prosser, Washington</ListItem>
            <ListItem>Found my love for programming at CBC</ListItem>
            <ListItem>Became a leader at WSU</ListItem>
          </List>
        </Slide>
        <Slide >
          <Heading   lineHeight={1} fit textColor="tertiary"> Google @ Pullman </Heading>
          <List textColor="five" textFont="quartenary" >
            <ListItem>On the spot interviews.</ListItem>
            <ListItem>Coding Workshops and Interview Techniques.</ListItem>
            <ListItem>Success stories and how you could do better.</ListItem>
          </List>
          <Appear>
          <Heading size={6} textAlign="left">
            What did google look for?
          </Heading>
          </Appear>
          <List textColor="six" textFont="quartenary" >
          <Appear>
            <ListItem>Are you a Tutor?</ListItem>
          </Appear>
          <Appear>
          <ListItem>Do you have an CS internship?</ListItem>
          </Appear>
          </List>

        </Slide>
        <Slide>
          <Heading size={3} textFont="secondary" textAlign="left" textColor="six"> How have you supported a community using technology? </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textFont="secondary" textAlign="left" textColor="six"> Coding Cougs</Heading>
          <Heading size={6} textColor="tertiary" textFont="quartenary" textAlign="right"> 
            we should expect more out of our education and learn modern technologies and frameworks. 
          </Heading>
            <Layout fit>
            <Fill>
            <List textColor="six" textFont="quartenary" >
              <ListItem>WSU-Tri Hackaton</ListItem>
              <ListItem>Google Seattle</ListItem>
          </List>
            </Fill>
            <Fill>
              <List textColor="six" textFont="quartenary" >
              <ListItem>DubHacks</ListItem>
              <ListItem>Crimson Code</ListItem>
            </List>
            </Fill>
            </Layout>

            <Heading textAlign="center" textColor="five" italic size={6}>Student Organization of the Year</Heading>

        </Slide>
       
        <Slide > 
            <Image src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/22791529_123065125031326_8807755859813011529_o.jpg?_nc_cat=0&oh=f3810130b64a0eed0ebf957eeedbe7f1&oe=5B7A6F3F"/>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/28618712_150822318922273_3132469378816801040_o.jpg?_nc_cat=0&oh=ded5ff3d09bbf621041a91be723c87f0&oe=5BB0F3EF"/>
            </Fill>
            <Fill>
              <Image src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/28871819_150822952255543_1521833959772495299_n.jpg?_nc_cat=0&oh=a355f5fc8625e2d6ac4f243b58f0cc7f&oe=5BBA31AB"/>
            </Fill>
          </Layout>
          
        </Slide>
        <Slide>
          <Heading textColor="six" >PNNL</Heading>
          <List fill textColor="five">
            <ListItem>{'Testing & Analytics'} </ListItem>
            <ListItem>{'Full Stack Development'} </ListItem>
          </List>
          {/* <Layout>
            <Fill>
          <Heading size={6} textAlign="left" >Testing</Heading>
          <List textColor="five" textFont="quartenary" >
          <ListItem>Core Auto Test</ListItem>
          <ListItem> NSDD </ListItem>
          <ListItem>Tank Vapors</ListItem>
          </List>
          </Fill>
          <Fill>
          <Heading size={6} textAlign="left" >Development</Heading>
          <List textColor="five" textFont="quartenary" >
          <ListItem>Core Auto Test</ListItem>
          <ListItem> NSDD </ListItem>
          <ListItem>Tank Vapors</ListItem>
          </List>
          </Fill>
            </Layout> */}

     
        </Slide>
      
      </Deck>
    );
  }
}
