import gql from "graphql-tag";

export const LINKS_QUERY = gql`{
    feed {
        links {
            id
            url
            description
        }
    }
}`;