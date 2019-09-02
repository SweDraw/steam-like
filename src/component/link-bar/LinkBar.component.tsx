import React from 'react';
import './LinkBar.style.scss';
import {Link, LinkProps} from "react-router-dom";

export interface LinkBarProps {
  links: [LinkProps, LinkProps, LinkProps, LinkProps]
}

export const ExampleLinkBarParameter:[LinkProps,LinkProps,LinkProps,LinkProps] = [
  {
    to: '/new',
    children: 'New'
  },
  {
    to: '/popular',
    children: 'Popular'
  },
  {
    to: '/free',
    children: 'Free'
  },
  {
    to: '/category',
    children: 'Category'
  },

];

const getGroupOfLinkFromArray = (linksArray: LinkProps[], startIndex: number, endIndex: number) => {
  return linksArray
    .filter((v: LinkProps, index: number) => index >= startIndex && index < endIndex)
    .map((link: LinkProps, index: number) => <Link className={'link-bar__link'} key={index} {...link}/>)
};

const LinkBar: React.FC<LinkBarProps> = ({links}) => {

  return (
    <section className="link-bar">
      <article className="link-bar__pair">
        {getGroupOfLinkFromArray(links, 0, 2)}
      </article>
      <article className="link-bar__pair">
        {getGroupOfLinkFromArray(links, 2, 4)}
      </article>
    </section>
  )
};

export default LinkBar;