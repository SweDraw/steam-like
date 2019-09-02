import React from 'react';
import './LogInPage.style.scss';
import LogForm from "../../component/log-form/LogForm.component";

export interface LogInPageProps {

}

const LogInPage: React.FC<LogInPageProps> = () => {
  return (
    <LogForm />
  )
};

export default LogInPage;