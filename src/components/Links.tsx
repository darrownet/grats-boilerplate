import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { LINKS_QUERY } from "../core/graphql/queries";

interface Link {
  id: string;
  description: string;
  url: string;
}

const Links = () => {

  const {loading, error, data} = useQuery(LINKS_QUERY);

  if (loading) return <p>Loading...</p>;

  return (<ul className="links">
    {data && data.feed.links.map((link: Link, idx: number) => {
      return (
        <li key={idx}>
          <div>{link.description}</div>
          <div>{link.url}</div>
        </li>
      );
    })}
  </ul>)
};

export default Links;
