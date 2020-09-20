import cookie from 'cookie';
import axios from "axios";

export default async (request, response) => {
    const oauth_token = cookie.serialize('oauth_token', '', {httpOnly: true, expires: new Date(0)});
    const url_api_self = cookie.serialize('url_api_self', '', {httpOnly: true, expires: new Date(0)});
    response.setHeader('Set-Cookie', [oauth_token, url_api_self])
    response.status(200).send();
}
