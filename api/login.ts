import {NowRequest, NowResponse} from "@vercel/node";
import axios from "axios";

export default async (request: NowRequest, response: NowResponse) => {
    let { email, password } = request.body

    const res = await axios.post(
        'https://api.kickstarter.com/xauth/access_token?client_id=2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG',
        { email, password }
    )
    return response.json({
        token: res.data.access_token,
        name: res.data.user.name,
        starred_projects: res.data.user.urls.api.starred_projects,
        backed_projects: res.data.user.urls.api.backed_projects,
    });
}
