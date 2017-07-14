import React from 'react'
import { Link } from 'react-router'
import PanelMenu from './PanelMenu'
import PanelAdd from './PanelAdd'
import PanelMenuClass from './PanelMenuClass'

const Panel = () => {
  return (
    <div>
      <div>
        <PanelMenu text="一方通行" option="true" />
      </div>
      <PanelMenuClass title="星标项目" />
      <div>
        <PanelMenu text="一方通行的学习项目1" option="false" />
        <PanelMenu text="一方通行的学习项目" option="false" />
      </div>
      <PanelMenuClass title="其他项目" />
      <div>
        <PanelMenu text="一方通行的学习项目" option="false" />
        <PanelMenu text="一方通行的学习项目" option="false" />
      </div>
      <PanelAdd />
      <Link to="/user">用户</Link>
    </div>
  )
};

export default Panel;
