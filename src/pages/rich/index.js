import React from "react";
import { Card, Button, Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjs from "draftjs-to-html";
export default class RichText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRichText: false,
      editorContent: "",
      editorState: ""
    };
  }
  /**
   *清除内容
   *
   * @memberof RichText
   */
  handleClearContent = () => {
    this.setState({
      editorState: "",
      editorContent: ""
    });
  };
  /**
   * 获取文本
   *
   * @memberof RichText
   */
  handleGetText = () => {
    this.setState({
      showRichText: true
    });
  };
  /**
   *编辑更改
   *
   * @memberof RichText
   */
  onEditorChange = editorContent => {
    this.setState({
      editorContent
    });
  };
  /**
   *编辑砖头更改
   *
   * @memberof RichText
   */
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { editorContent, editorState } = this.state;
    return (
      <div>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleClearContent}>
            清空内容
          </Button>
          <Button type="primary" onClick={this.handleGetText}>
            获取HTML文本
          </Button>
        </Card>

        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}
          ></Editor>
        </Card>

        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            });
          }}
          footer={null}
        >
          {draftjs(this.state.editorContent)}
        </Modal>
      </div>
    );
  }
}
