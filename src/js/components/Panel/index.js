import React from 'react'
import PanelMenu from './PanelMenu'
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
        <PanelMenu text="一方通行的学习项目2" option="false" />
      </div>
      <PanelMenuClass title="星标项目" />
    </div>
  )
};

export default Panel;
