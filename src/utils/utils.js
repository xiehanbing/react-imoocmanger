import { Modal, Select, Icon, message } from "antd";
import React from "react";
import Store from "./Store.js";
import Environment from "./../config/Environment";
import UiConfirm from "./../pages/ui/confirm";
const Option = Select.Option;
export default {
  /**
   * 格式化时间
   * @param {Date} time 时间
   */
  formateDate(time) {
    if (time == null) return null;

    let date = new Date(time);

    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      "  " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  },
  /*
   * 分页代码封装
   * @useage:
   * Utils.pagination(data,(current)=>{
   *    this.params.page = current;
   *    this.requestList()
   * })
   * */
  pagination(data, callback) {
    var page = {
      onChange: current => {
        callback && callback(current);
      }
    };
    page.current = data.result.page;
    page.pageSize = data.result.page_size;
    page.total = data.result.total_count;
    page.showTotal = () => {
      return "共" + data.result.total_count + "条 ";
    };
    page.showQuickJumper = true;
    return page;
  },
  /**
   *获取当前环境下的url
   *
   * @param {*} configName url对应的名称
   * @returns
   */
  getEnvironmentUrl(configName) {
    var environment = Environment.CurrentEnvironment;
    var configUrl = Environment.EnvironmentConfig[environment][configName];
    console.log(`${environment}下的${configName} 对应的 ${configUrl}`);
    if (configUrl == null)
      throw `${environment}环境下的 ${configName}` + "对应的url为空";
    if (configUrl == "")
      throw `${environment}环境下的 ${configName}` + "对应的url为空字符串";
    return configUrl;
  },
  // 格式化金额,单位:分(eg:430分=4.30元)
  formatFee(fee, suffix = "") {
    if (!fee) {
      return 0;
    }
    return Number(fee).toFixed(2) + suffix;
  },
  // 格式化公里（eg:3000 = 3公里）
  formatMileage(mileage, text) {
    if (!mileage) {
      return 0;
    }
    if (mileage >= 1000) {
      text = text || " km";
      return Math.floor(mileage / 100) / 10 + text;
    } else {
      text = text || " m";
      return mileage + text;
    }
  },
  // 隐藏手机号中间4位
  formatPhone(phone) {
    phone += "";
    return phone.replace(/(\d{3})\d*(\d{4})/g, "$1***$2");
  },
  // 隐藏身份证号中11位
  formatIdentity(number) {
    number += "";
    return number.replace(/(\d{3})\d*(\d{4})/g, "$1***********$2");
  },
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = []; //[<Option value="0" key="all_key">全部</Option>];
    data.map(item => {
      options.push(
        <Option value={item.id} key={item.id}>
          {item.name}
        </Option>
      );
    });
    return options;
  },
  /**
   * ETable 行点击通用函数
   * @param {*选中行的索引} selectedRowKeys
   * @param {*选中行对象} selectedItem
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      });
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      });
    }
  },

  modalInfo(content, title) {
    if (title == null || title == "") title = "信息";
    Modal.info({
      title: title,
      content: content
    });
  },
  modalSuccess(content, title) {
    if (title == null || title == "") title = "信息";
    Modal.success({
      title: title,
      content: content
    });
  },
  modalError(content, title) {
    if (title == null || title == "") title = "信息";
    Modal.error({
      title: title,
      content: content
    });
  },
  modalWarning(content, title) {
    if (title == null || title == "") title = "信息";
    Modal.warning({
      title: title,
      content: content
    });
  },

  messageInfo(content, title) {
    message.info(content);
  },
  messageSuccess(content) {
    message.success(content);
  },
  messageError(content, title) {
    message.error(content);
  },
  messageWarning(content, title) {
    message.warning(content);
  },

  confirm(props) {
    var title = props.title || "确认?";
    var content = props.text || "是否确认";
    var okText = props.okText || "确认";
    var cancelText = props.cancelText || "取消";
    Modal.confirm({
      title: title,
      content: content,
      okText: okText,
      cancelText: cancelText,
      onOk: props.onOk
      // visible: props.visible,
      // onCancel: props.onCancel
    });
  }
};
