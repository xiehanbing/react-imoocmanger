import React from "react";
import { Card, Table, message, Modal, Badge } from "antd";
import axios from "../../axios";
import Utils from "../../utils/utils";

export default class HighTable extends React.Component {
  state = {
    list: [],
    sortedInfo: {
      order: "descend"
    }
  };
  componentDidMount() {
    axios
      .ajax({
        url: "/table/high/list.json"
      })
      .then(res => {
        let data = res.result;
        this.setState({
          list: data.list.map((item, index) => {
            item.key = index;
            return item;
          })
        });
      });
  }
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter
    });
  };

  handleDelete = id => {
    Modal.confirm({
      title: "确定",
      content: "你确定要删除此条数据",
      onOk() {
        message.success("删除成功");
      },
      onCancel() {
        message.info("取消删除");
      }
    });
  };

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        align: "center",
        width: 80
      },
      {
        title: "用户名",
        width: 80,
        align: "center",
        dataIndex: "username"
      },
      {
        title: "性别",
        width: 80,
        dataIndex: "sex",
        align: "center",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        width: 120,
        dataIndex: "state",
        align: "center",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子一枚",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        width: 120,
        dataIndex: "interest",
        align: "center",
        render(interest) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[interest];
        }
      },
      {
        title: "婚姻",
        width: 120,
        dataIndex: "isMarried",
        align: "center",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "生日",
        width: 120,
        align: "center",
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        width: 120,
        align: "center",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        width: 120,
        align: "center",
        dataIndex: "time"
      }
    ];

    const columns2 = [
      {
        title: "id",
        width: 80,
        fixed: "left",
        dataIndex: "id"
      },
      {
        title: "用户名",
        width: 80,
        fixed: "left",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子一枚",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[interest];
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried1",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried2",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried3",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried4",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried5",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried6",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried7",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried8",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time",
        width: 120
        // fixed: "right"
      }
    ];
    const columns3 = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "年龄",
        dataIndex: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: this.state.sortedInfo.order
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子一枚",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[interest];
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time"
      }
    ];
    const columns4 = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "年龄",
        dataIndex: "age"
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          if (state == 1) {
            return <Badge status="success" text="游泳" />;
          } else if (state == 2) {
            return <Badge status="error" text="打篮球" />;
          } else if (state == 3) {
            return <Badge status="default" text="踢足球" />;
          } else if (state == 4) {
            return <Badge status="processing" text="跑步" />;
          } else if (state == 5) {
            return <Badge status="warning" text="爬山" />;
          }
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[interest];
        }
      },
      {
        title: "婚姻",
        dataIndex: "isMarried",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        dataIndex: "address"
      },
      {
        title: "操作",
        render: (text, record) => {
          //此处必须使用render:()=>形式，否则会报this对象为空
          return <a onClick={() => this.handleDelete()}>删除</a>;
        }
      }
    ];
    return (
      <div className="table-wrap">
        <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={{ pageSize: 5 }}
            scroll={{ y: 240 }}
          ></Table>
        </Card>

        <Card title="左侧固定" style={{ marginTop: 10 }}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.list}
            scroll={{ x: 1400 }}
          ></Table>
        </Card>

        <Card title="排序" style={{ marginTop: 10 }}>
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.list}
            onChange={this.handleChange}
          ></Table>
        </Card>

        <Card title="按钮操作" style={{ marginTop: 10 }}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.list}
          ></Table>
        </Card>
      </div>
    );
  }
}
