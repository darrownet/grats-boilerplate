import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

interface Link {
    id: string;
    description: string;
    url: string;
}

const SAMPLE_QUERY = gql`{
    feed {
        links {
            id
            url
            description
        }
    }
}`;

const SampleQuery = () => {

    const { loading, error, data } = useQuery(SAMPLE_QUERY);

    if (loading) return <p>Loading ...</p>;

    const links = (data && data.feed.links) || [];

    return (<ul>
          {links.map((link:Link, idx:number) => {
              return (
                <li key={idx}>
                    <span>{link.id}</span>
                    <span> : </span>
                    <span>{link.description}</span>
                    <div>{link.url}</div>
                </li>
              );
          })}
      </ul>)
};

export default SampleQuery;