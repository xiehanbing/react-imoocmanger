import React from "react";
import {
  Card,
  Input,
  Button,
  Form,
  message,
  Icon,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Checkbox
} from "antd";
import moment from "moment";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;

class FormRegister extends React.Component {
  state = {
    loading: false,
    userImg: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.username} 恭喜你，通过本次注册表单注册成功,当前密码为：${userInfo.password}`
        );
      }
    });
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({
        loading: true
      });
      return;
    }
    if (info.file.status === "done") {
      this.getBase64(info.file.originFileObj, userImg =>
        this.setState({ userImg, loading: false })
      );
    }
  };
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
    const offsetLayout = {
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 12,
          offset: 4
        }
      }
    };
    const userImg = this.state.userImg;
    const currentDate = new Date();
    const currentDateString =
      currentDate.getFullYear() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getDate();
    return (
      <div>
        <Card title="注册表单">
          <Form
            {...formItemLayout}
            layout="horizontal"
            onSubmit={this.handleSubmit}
          >
            <FormItem label="用户名">
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "请输入用户名" },
                  { min: 5, max: 10, message: "长度应在5-10个字符内" },
                  {
                    patten: /(^\w+\d+)|(^\d+\w+)/gi,
                    message: "用户名必须为字母或者数字"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    ></Icon>
                  }
                  placeholder="请输入用户名"
                ></Input>
              )}
            </FormItem>

            <FormItem label="密码">
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "请输入密码" },
                  { min: 5, max: 10, message: "长度应在5-10个字符内" }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    ></Icon>
                  }
                  type="password"
                  placeholder="请输入密码"
                ></Input>
              )}
            </FormItem>

            <FormItem label="性别">
              {getFieldDecorator("sex", {
                initialValue: "1"
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem label="年龄">
              {getFieldDecorator("age", {
                initialValue: 18
              })(<InputNumber></InputNumber>)}
            </FormItem>

            <FormItem label="当前状态">
              {getFieldDecorator("state", {
                initialValue: "1"
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">风华浪子</Option>
                  <Option value="3">北大才子一枚</Option>
                  <Option value="4">百度FE</Option>
                  <Option value="5">创业者</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="爱好">
              {getFieldDecorator("interest", {
                initialValue: ["1", "4"]
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                  <Option value="4">跑步</Option>
                  <Option value="5">爬山</Option>
                  <Option value="6">骑行</Option>
                  <Option value="7">桌球</Option>
                  <Option value="8">麦霸</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="是否已婚">
              {getFieldDecorator("isMarried", {
                initialValue: true,
                valuePropName: "checked"
              })(<Switch></Switch>)}
            </FormItem>

            <FormItem label="生日">
              {getFieldDecorator("birthday", {
                initialValue: moment(currentDateString)
              })(<DatePicker format="YYYY-MM-DD"></DatePicker>)}
            </FormItem>

            <FormItem label="联系地址">
              {getFieldDecorator("address", {
                initialValue: "杭州市西湖区东方通信大厦"
              })(<TextArea placeholder="请输入联系地址"></TextArea>)}
            </FormItem>

            <FormItem label="早起时间">
              {getFieldDecorator("time", {
                initialValue: moment("9:00:00", "HH:mm:ss")
              })(<TimePicker></TimePicker>)}
            </FormItem>

            <FormItem label="头像">
              {getFieldDecorator("userImg", {
                rules: [
                  {
                    required: true,
                    message: "请上传头像"
                  }
                ]
              })(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange}
                >
                  {userImg ? (
                    <img src={userImg} alt="" />
                  ) : (
                    <Icon type="plus"></Icon>
                  )}
                </Upload>
              )}
            </FormItem>

            <FormItem
              {...offsetLayout}
              labelCol={{
                offset: 3
              }}
            >
              {getFieldDecorator("agreement", {
                valuePropName: "checked",
                initialValue: true
              })(
                <Checkbox>
                  我已阅读过<a>DRAMA 协议</a>
                </Checkbox>
              )}
            </FormItem>

            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormRegister);
