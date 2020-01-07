import gql from "graphql-tag";

export const ADD_LINK = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            url
            description
        }
    }
`
