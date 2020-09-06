import mockedProjects from '@/mocks/projects.json';
import {Model, Server} from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
    return new Server({
        environment,

        models: {
            project: Model,
        },

        seeds(server) {
            mockedProjects.projects.forEach((project: any) => server.create("project", project));
        },

        routes() {
            this.urlPrefix = process.env.VUE_APP_BACKEND_ORIGIN;
            this.namespace = "api"
            this.get("/projects");
            this.get("/projects/:id");
        },
    })
}