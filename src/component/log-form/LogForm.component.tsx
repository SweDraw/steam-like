import React from 'react';
import './LogForm.style.scss';
import {Link} from "react-router-dom";
import Password from "../input/password/Password.component";
import UserName from "../input/text/UserName.component";
import List from "../list/List.component";
import {ListItemProps} from "../list-item/ListItem.component";
import Submit from "../input/submit/Submit.component";

export interface LogFormProps {

}

const ListItems: ListItemProps[] = [
  {children: 'Buy full versions of game'},
  {children: 'Add support to Steam community'},
  {children: 'Speak with friend to game'},
  {children: 'Support platform'},
  {children: 'Organize game'},
  {children: 'Update game'}
];

const LogForm: React.FC<LogFormProps> = () => {
  return (
    <div className="log-page">
      <section className="log">
        <section className="log__main">
          <section className="log__form-section">
            <article className="log__log-in">
              <form className="log__form">
                <p className="log__title">Log in</p>
                <p className="log__subtitle">to create before account</p>
                <p className="log__subtitle">User name</p>
                <UserName name={'user-name'} className={'log__user-name'}/>
                <p className="log__subtitle">Password</p>
                <Password name={'password'} className={`log__password`}/>
                <Submit className={'log__log-to-account'} children={'Log in'}/>
              </form>
            </article>
            <section className="log__create">
              <article className="log__info">
                <p className="log__title">Create</p>
                <p className="log__subtitle">New free account</p>
                <p className="log__subtitle">Stam - is free and easy to use. Stam - the leading platform for games and
                  applications on PC, Mac and Linux. </p>
              </article>
              <article className="log__link">
                <Link to={'/create'} className="log__account-form">Create new user</Link>
              </article>
            </section>
          </section>
          <Link
            className={'log__password-check'}
            to={'/password-repeat'}
          >
            Forget password?
          </Link>
        </section>
        <section className="log__why">
          <article>
            <p className="log__title">Why you need this?</p>
            <List className={'log__list'} listItems={ListItems}/>
          </article>
        </section>
      </section>
    </div>
  )
};

export default LogForm;