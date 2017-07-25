import React from 'react'
import PanelMenu from './PanelMenu'
import { Link } from 'react-router'
import PanelAdd from './PanelAdd'
import PanelMenuClass from './PanelMenuClass'

const Panel = ({ userInfo, flagItem, otherProject }) => {
  return (
    <div>
      <div>
        <PanelMenu title={userInfo.name} option="true" />
      </div>
      <PanelMenuClass title="星标项目" />
      <div>
        {flagItem.map((item, index) =>
          <PanelMenu key={index} path={item.path} title={item.title} option="false" />
        )}
      </div>
      <PanelMenuClass title="其他项目" />
      <div>
        {otherProject.map((item, index) =>
          <PanelMenu key={index} path={item.path} title={item.title} option="false" />
        )}
      </div>
      <PanelAdd />
      <Link to="/user">用户</Link>
    </div>
  )
};

export default Panel;
