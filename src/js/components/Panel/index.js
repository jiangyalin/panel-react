import React from 'react'
import PanelMenu from './PanelMenu'
import PanelMenuClass from './PanelMenuClass'

const Panel = () => {
  return (
    <div>
      <PanelMenu text="一方通行" option="true" />
      <PanelMenuClass title="星标项目" />
    </div>
  )
};

export default Panel;
