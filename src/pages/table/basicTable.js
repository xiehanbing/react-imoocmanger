import React from "react";
import { Card, Table, message } from "antd";
import axios from "../../axios";
import Utils from "../../utils/utils";

export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    list: [],
    pagination: ""
  };
  params = {
    page: 1
  };
  requestList = () => {
    let _this = this;
    axios
      .ajax({
        url: "/table/list1.json",
        data: {
          page: this.params.page
        }
      })
      .then(res => {
        res.result.page = this.params.page;
        this.setState({
          list: res.result.list.map((item, index) => {
            item.key = index;
            return item;
          }),
          pagination: Utils.pagination(res, current => {
            _this.params.page = current;
            _this.requestList();
          })
        });
      });
  };

  componentDidMount() {
    const data = [
      {
        id: 0,
        username: "Jack",
        sex: "1",
        state: "1",
        interest: "1",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 1,
        username: "Mark",
        sex: "2",
        state: "3",
        interest: "2",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 2,
        username: "Tom",
        sex: "2",
        state: "3",
        interest: "5",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 3,
        username: "Marry",
        sex: "1",
        state: "5",
        interest: "6",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 4,
        username: "Marli",
        sex: "1",
        state: "3",
        interest: "8",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 5,
        username: "Toto",
        sex: "1",
        state: "1",
        interest: "1",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      },
      {
        id: 6,
        username: "Cherry",
        sex: "1",
        state: "1",
        interest: "1",
        isMarried: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00:00"
      }
    ];
    data.map((item, index) => {
      item.key = index;
    });
    this.setState({
      dataSource: data
    });

    this.requestList();
  }

  // 选中表格中的一行
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
  // onMuliRowClick = (selectedRow, selectedRowKey) => {
  //   if (this.state.selectedIds == null) {
  //     this.state.selectedIds = [selectedRowKey];
  //   } else this.state.selectedIds.push(selectedRowKey);
  //   if (this.state.selectedRowKeys == null) {
  //     this.state.selectedRowKeys = [selectedRowKey];
  //   } else {
  //     this.state.selectedRowKeys.push(selectedRowKey);
  //   }

  //   this.setState({
  //     selectedRowCheckKeys: this.state.selectedRowKeys,
  //     selectedIds: this.state.selectedIds,
  //     selectedItem: selectedRow
  //   });
  // };
  onSelectChange = (index, records) => {
    var record = records[0];
    if (records.length > 1) {
      message.warning("最多选择一个");
      return;
    }
    let selectKey = index;
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
  render() {
    const columns = [
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
        title: "爱好",
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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys: this.state.selectedRowCheckKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
        const selectedIds = [];
        selectedRows.map(item => {
          selectedIds.push(item.id);
        });
        this.setState({
          selectedRowCheckKeys: selectedRowKeys,
          selectedIds: selectedIds,
          selectedItem: selectedRows[0]
        });
      }
    };
    return (
      <div className="table-wrap">
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          ></Table>
        </Card>

        <Card title="Mock表格" style={{ marginTop: 10 }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={false}
          ></Table>
        </Card>

        <Card title="Mock表格-单选" style={{ marginTop: 10 }}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
            columns={columns}
            dataSource={this.state.list}
            pagination={false}
          ></Table>
        </Card>

        <Card title="Mock表格-多选" style={{ marginTop: 10 }}>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            // onRow={(record, index) => {
            //   return {
            //     onClick: () => {
            //       this.onMuliRowClick(record, index);
            //     }
            //   };
            // }}
            columns={columns}
            dataSource={this.state.list}
            pagination={false}
          ></Table>
        </Card>

        <Card title="Mock表格-分页" style={{ marginTop: 10 }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    );
  }
}
