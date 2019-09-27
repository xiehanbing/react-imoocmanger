import React from "react";
import { Button, notification, Card, Tabs, message, Icon } from "antd";
import "./ui.less";
const { TabPane } = Tabs;
export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: "Content of Tab 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab 2", key: "2" },
      { title: "Tab 3", content: "Content of Tab 3", key: "3" }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    };
  }

  callback = key => {
    message.info("Hi,您选择了页签:" + key);
  };

  onChange = activeKey => {
    this.callback(activeKey);
    this.setState({
      activeKey
    });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: "New Tab" + this.newTabIndex,
      content: "Content of new Tab" + this.newTabIndex,
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              欢迎学习React课程
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              欢迎学习React课程
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              React是一门非常受欢迎的MV*框架
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带图标页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus"></Icon>
                  Tab 1
                </span>
              }
              key="1"
            >
              创建属于你的React项目
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit"></Icon>
                  Tab 1
                </span>
              }
              key="2"
            >
              尝试如何使用React进行修改
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete"></Icon>
                  Tab 1
                </span>
              }
              key="3"
            >
              删除它，就这么简单
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab可关闭卡片式页签" className="card-wrap">
          <Tabs
            activeKey={this.state.activeKey}
            type="editable-card"
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    );
  }
}
