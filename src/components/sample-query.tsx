import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

type SampleQueryProps = {
    query: string
};

interface Link {
    id: string;
    description: string;
}

interface Links {
    links: Link[];
}

interface Data {
    feed: Links;
}

const SampleQuery: React.FC<SampleQueryProps> = ({query}) => {

    const { loading, error, data } = useQuery(gql(query));

    if (loading) return <p>Loading ...</p>;

    const links = (data && data.feed.links) || [];

    return (<ul>
          {links.map((link: Link, idx:number) => {
              return (
                <li key={idx}>
                    <span>{link.id}</span>
                    <span> : </span>
                    <span>{link.description}</span>
                </li>
              );
          })}
      </ul>)
};

export default SampleQuery;