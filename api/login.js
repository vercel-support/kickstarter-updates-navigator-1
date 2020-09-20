import cookie from 'cookie';
import axios from "axios";

function nextweek(){
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
}

export default async (request, response) => {
    let kickstarterResponse = undefined;
    let user = undefined;
    let token = undefined;

    if (request.method === 'POST') {
        let { email, password } = request.body

        try {
            kickstarterResponse = await axios.post(
                'https://api.kickstarter.com/xauth/access_token?client_id=2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG',
                { email, password }
            );
            user = kickstarterResponse.data.user;
            token = kickstarterResponse.data.access_token;
        } catch (e) {
            // likely credentials failed
        }
    } else if (request.headers.cookie) {
        const cookies = cookie.parse(request.headers.cookie || '');
        const { oauth_token, url_api_self } = cookies;

        try {
            kickstarterResponse = await axios.get(
                `${url_api_self}&oauth_token=${oauth_token}`
            );
            user = kickstarterResponse.data;
            token = oauth_token;
        } catch (e) {
            // likely credentials failed
        }
    }

    if (!kickstarterResponse
        || !(kickstarterResponse.status >= 200 && kickstarterResponse.status < 300)
        || !user
    ) {
        return response.status(401).send();
    }

    const oauth_token = cookie.serialize('oauth_token', token, {httpOnly: true, expires: nextweek()});
    const url_api_self = cookie.serialize('url_api_self', user.urls.api.self, {httpOnly: true, expires: nextweek()});
    response.setHeader('Set-Cookie', [oauth_token, url_api_self])

    return response.json({
        name: user.name,
        starred_projects: user.urls.api.starred_projects,
        backed_projects: user.urls.api.backed_projects,
    });
}
