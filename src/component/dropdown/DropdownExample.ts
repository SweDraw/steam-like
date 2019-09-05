import {DropdownProps} from "./Dropdown.component";
import {DropdownItemProps} from "./DropdownItem";

export const DropdownItemExample: DropdownItemProps[] = [
  {
    hrefWay: 'market/popular',
    text: 'Popular'
  },
  {
    text: 'Favorite',
    hrefWay: 'market/favorite'
  },
  {
    text: 'List of desired',
    hrefWay: 'market/desired'
  },
  {
    hrefWay: 'Main',
    text: 'community/main'
  },
  {
    text: 'Discussion',
    hrefWay: 'community/discussion'
  },
  {
    hrefWay: 'community/workshop',
    text: 'Workshop'
  }
];

const DropdownExample:DropdownProps[] = [
  {
    headerText: 'Magazine',
    listLink: [DropdownItemExample[0], DropdownItemExample[1],DropdownItemExample[2]]
  },
  {
    headerText: 'Community',
    listLink: [DropdownItemExample[3], DropdownItemExample[4],DropdownItemExample[5]]
  }
];

export default DropdownExample;
