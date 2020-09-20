/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import mockedProjects from '@/mocks/projects.json';
import {Model, Server, Response} from 'miragejs'

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
            this.post("/projects", (schema) => {
                // @ts-ignore
                return schema.projects.all()
            });

            this.get("/login", () => {
                return new Response(401)
            });

            this.post("/login", (schema, request) => {
                const reqBody = JSON.parse(request.requestBody)
                const body = JSON.stringify({
                    name: "Mock name",
                    starred_projects: null,
                    backed_projects: null,
                })
                return new Response(200, undefined, body)
            });

            this.get("/logout", () => {
                return new Response(200)
            });
        },
    })
}