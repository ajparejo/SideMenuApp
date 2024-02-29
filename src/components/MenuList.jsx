/* eslint-disable react/prop-types */
import { MenuItem } from "./MenuItem"

export const MenuList = ({list = []}) => {
  return (
    <ul className="MenuListContainer">
        {
            list && list.length ?
            list.map((item, index) => <MenuItem item={item} key={index} />)
            : null
        }
    </ul>
  )
}
