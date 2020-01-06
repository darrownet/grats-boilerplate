import gql from "graphql-tag";

export const SAMPLE_QUERY = gql`{
    feed {
        links {
            id
            url
            description
        }
    }
}`;