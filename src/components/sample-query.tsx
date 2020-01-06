import React from 'react'
import {useQuery} from '@apollo/react-hooks';
import {SAMPLE_QUERY} from "../graphql/queries";

interface Link {
  id: string;
  description: string;
  url: string;
}

const SampleQuery = () => {

  const {loading, error, data} = useQuery(SAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;

  return (<ul>
    {data && data.feed.links.map((link: Link, idx: number) => {
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