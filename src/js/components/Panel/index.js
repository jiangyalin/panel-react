import React from 'react'
import { Link } from 'react-router'
import PanelMenu from './PanelMenu'
import PanelAdd from './PanelAdd'
import PanelMenuClass from './PanelMenuClass'

const Panel = ({ userInfo, flagItem, otherProject }) => {
  return (
    <div>
      <div>
        <PanelMenu text={userInfo.name} option="true" />
      </div>
      <PanelMenuClass title="星标项目" />
      <div>
        {flagItem.map(item =>
        <Link to={item.path}>
          <PanelMenu text={item.title} option="false" />
        </Link>
        )}
      </div>
      <PanelMenuClass title="其他项目" />
      <div>
        {otherProject.map(item =>
          <Link to={item.path}>
            <PanelMenu text={item.title} option="false" />
          </Link>
        )}
      </div>
      <PanelAdd />
      <Link to="/user">用户</Link>
    </div>
  )
};

export default Panel;
