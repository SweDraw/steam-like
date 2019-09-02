import React from 'react';
import './CreatePage.style.scss';
import CreateForm from "../../component/create-form/CreateForm.component";

export interface CreatePageProps {

}

const CreatePage: React.FC<CreatePageProps> = () => {

  return (
    <CreateForm/>
  )
};

export default CreatePage;