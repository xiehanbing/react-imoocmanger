import React from "react";
import { Card, Form, Button, Input, Checkbox, Icon, message } from "antd";
import "./form.less";
const FormItem = Form.Item;
class FormLogin extends React.Component {
  /**
   *提交
   *
   * @memberof Login
   */
  handleSubmit = e => {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.username} 恭喜你，通过本次登录表单学习,当前密码为：${userInfo.password}`
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form-wrap">
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form
            layout="horizontal"
            style={{ maxWidth: 300 }}
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            <FormItem>
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
            <FormItem>
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
                  placeholder="请输入密码"
                  type="password"
                ></Input>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);
