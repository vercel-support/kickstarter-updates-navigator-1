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
            if (process.env.VUE_APP_BACKEND_ORIGIN) {
                this.urlPrefix = process.env.VUE_APP_BACKEND_ORIGIN
            }
            this.namespace = "api"
            this.get("/projects");
            this.get("/projects/:id");

            this.post("/login", (schema, request) => {
                const body = JSON.parse(request.requestBody)
                return JSON.stringify(body.email+body.password);
            });
        },
    })
}