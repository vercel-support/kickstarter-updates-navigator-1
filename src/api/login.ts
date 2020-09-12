import {NowRequest, NowResponse} from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
    return response.json({message: 'Hello world!'});
}

// authenticate() {
//   const xhr = new XMLHttpRequest();
//   const url = 'https://cors-anywhere.herokuapp.com/api.kickstarter.com/xauth/access_token?client_id=2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG';
//
//   xhr.open('POST', url);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onreadystatechange = evt => {
//     console.log(evt);
//   };
//   const body = {
//     email: this.email,
//     password: this.password
//   };
//   xhr.send(JSON.stringify(body));
// },