/* eslint-disable react/prop-types */
import { useState } from "react"
import { MenuList } from "./MenuList"

export const MenuItem = ({item}) => {
  
  const [displayChildren, setDisplayChildren] = useState({})

  function HandleChildren (getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel]
    })
  }

  // console.log(displayChildren)

  return (
    <li>
      <div className="listItem">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ?
        <span onClick={() => HandleChildren(item.label)}>
          {displayChildren[item.label] ? "-" : "+"}
        </span>
        : null }
      </div>
      {item && item.children && item.children.length && displayChildren[item.label] > 0 ? <MenuList list={item.children} /> : null }
    </li>
  )
}
