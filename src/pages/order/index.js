import React from "react";
import { Card, Button, Input, Table, message, Modal, Form } from "antd";
import axios from "./../../axios/index";
import BaseForm from "./../../components/BaseForm/index";
import Utils from "./../../utils/utils";
import "./order.less";
const FormItem = Form.Item;
class Order extends React.Component {
  state = {
    list: [],
    orderInfo: {},
    orderConfirmVisble: false
  };
  params = {
    page: 1
  };
  // 表单封装，通过构建表单对象，在BaseForm中进行统一渲染
  formList = [
    {
      type: "SELECT",
      label: "城市",
      field: "city",
      placeholder: "全部",
      initialValue: "0",
      width: 100,
      list: [
        { id: "0", name: "全部" },
        { id: "beijing", name: "北京" },
        { id: "shanghai", name: "上海" },
        { id: "tianjin", name: "天津" },
        { id: "hangzhou", name: "杭州" }
      ]
    },
    {
      type: "时间查询"
    },
    {
      type: "SELECT",
      label: "订单状态",
      field: "order_status",
      placeholder: "全部",
      initialValue: "0",
      width: 150,
      list: [
        { id: "0", name: "全部" },
        { id: "1", name: "进行中" },
        { id: "3", name: "行程结束" }
      ]
    }
  ];
  // 列表请求
  requestList = () => {
    let _this = this;
    axios
      .ajax({
        url: "/json/order/list.json",
        data: {
          params: this.params
        }
      })
      .then(res => {
        if (res) {
          _this.setState({
            list: res.result.list.map((item, index) => {
              item.key = index;
              return item;
            }),
            pagination: Utils.pagination(res, current => {
              _this.params.page = current;
              _this.requestList();
            })
          });
        }
      });
  };
  componentDidMount() {
    this.requestList();
  }
  handleFilterSubmit = filterParams => {
    this.params = filterParams;
    this.requestList();
  };
  handleOrderDetail = () => {
    let item = this.state.selectedItem; //获取选择的数据
    if (!item) {
      Utils.messageWarning("请先选择一条订单");
      return;
    }
    window.open(`/#/common/order/detail/${item.orderNo}`, "_blank");
  };

  handleConfirmFinishOrder = () => {
    let item = this.state.selectedItem;
    if (!item) {
      Utils.messageWarning("请选择一条订单进行结束");
      return;
    }

    axios
      .ajax({
        url: "/order/ebike_info",
        data: {
          params: {
            orderId: item.id
          }
        }
      })
      .then(res => {
        if (res.code == 0) {
          this.setState({
            orderInfo: res.result,
            orderConfirmVisble: true
          });
        }
      });
  };

  handleFinishOrder = () => {
    let item = this.state.selectedItem; //获取选择的数据
    if (!item) {
      Utils.messageWarning("请先选择一条订单");
      return;
    }
    let _this = this;
    axios
      .ajax({
        url: "/order/finish_order",
        data: {
          params: {
            orderNo: item.orderNo
          }
        }
      })
      .then(res => {
        if (res.code == 0) {
          Utils.messageSuccess("订单结束成功");
          _this.setState({
            orderConfirmVisble: false
          });
          _this.requestList();
        }
      });
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
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
        title: "",
        dataIndex: "id"
      },
      {
        title: "订单编号",
        dataIndex: "orderNo"
      },
      {
        title: "车辆编号",
        dataIndex: "carNo"
      },
      {
        title: "用户名",
        dataIndex: "userName"
      },
      {
        title: "手机号码",
        dataIndex: "phoneNumber"
      },
      {
        title: "里程",
        dataIndex: "mile",
        render(distance) {
          return distance / 1000 + "Km";
        }
      },
      {
        title: "行驶时长",
        dataIndex: "duration"
      },
      {
        title: "状态",
        dataIndex: "status"
      },
      {
        title: "开始时间",
        dataIndex: "begin_time"
      },
      {
        title: "结束时间",
        dataIndex: "end_time"
      },
      {
        title: "订单金额",
        dataIndex: "order-amount"
      },
      {
        title: "实付金额",
        dataIndex: "pay_amount"
      }
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <div>
        <Card>
          <BaseForm
            formList={this.formList}
            filterSubmit={this.handleFilterSubmit}
          ></BaseForm>
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleOrderDetail}>
            订单详情
          </Button>
          <Button type="primary" onClick={this.handleConfirmFinishOrder}>
            结束订单
          </Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          ></Table>
        </div>
        <Modal
          title="结束订单"
          visible={this.state.orderConfirmVisble}
          onCancel={() => {
            this.setState({
              orderConfirmVisble: false
            });
          }}
          onOk={this.handleFinishOrder}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="车辆编号" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="剩余电量" {...formItemLayout}>
              {this.state.orderInfo.battery + "%"}
            </FormItem>
            <FormItem label="行程开始时间" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
            <FormItem label="当前位置" {...formItemLayout}>
              {this.state.orderInfo.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Order;
