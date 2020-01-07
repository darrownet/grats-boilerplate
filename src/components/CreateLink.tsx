import React, {FormEvent, useState} from 'react'
import { useMutation } from '@apollo/react-hooks';
import { ADD_LINK } from "../core/graphql/mutations";
import { getFormData } from '../core/services/utils';

const CreateLink = () => {

  const [ addLink ] = useMutation(ADD_LINK);

  const onLinkSubmit = (evt:FormEvent):void => {
    evt.preventDefault();
    console.log(getFormData(evt));

    const description = getFormData(evt).description;
    const url = getFormData(evt).url;

    addLink({ variables: { url, description } });
  };

  return (
    <div className="create-link">
      <form onSubmit={onLinkSubmit}>
        <div>
          <label htmlFor="urlField">URL:</label>
          <input name="urlField"/>
        </div>
        <div>
          <label htmlFor="descriptionField">Description:</label>
          <input name="descriptionField"/>
        </div>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );

};

export default CreateLink