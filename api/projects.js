import cookie from 'cookie';
import axios from "axios";

export default async (request, response) => {
    async function projectsFetcher(projectsUrl) {
        let res = await axios.get(
            `${projectsUrl}&oauth_token=${oauth_token}`
        )

        let moreProjects = res.data.urls.api ? res.data.urls.api.more_projects : undefined
        while (moreProjects !== undefined) {
            projects.push(...res.data.projects);
            res = await axios.get(
                `${moreProjects}&oauth_token=${oauth_token}`
            )
            moreProjects = res.data.urls.api ? res.data.urls.api.more_projects : undefined
        }
        projects.push(...res.data.projects);
    }

    const projects = [];
    const cookies = cookie.parse(request.headers.cookie || '');
    const { oauth_token } = cookies;
    const { starred_projects, backed_projects } = request.body

    await projectsFetcher(starred_projects);
    await projectsFetcher(backed_projects);

    return response.json({
        total: projects.length,
        projects
    });
}
