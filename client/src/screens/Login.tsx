import * as React from 'react';
import './Login.scss';
import { Form, Input, Button } from 'antd';
import {FormComponentProps} from "antd/lib/form/Form";
import {WeddingSection} from "./wedding/components/WeddingSection";
import {SectionTitle} from "./wedding/components/SectionTitle";
import {fetchAccessToken, isApiError} from "../api";
import {AuthenticationResponse} from "../models/authentication";
import {ErrorText} from "./wedding/components/ErrorText";
const FormItem = Form.Item;

export type LoginProps = { onObtainAccessToken: (accessToken: string) => any }
type FormLoginProps = LoginProps & FormComponentProps;

type State = {
  serverError: Error | null,
  inProgress: boolean,
}

class Login extends React.Component<FormLoginProps, State> {
  constructor(props: FormLoginProps, context: any) {
    super(props, context);
    this.state = {
      serverError: null,
      inProgress: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values.password);
      }
    });
  };

  login = (password: string) => {
    this.setState({inProgress: true});
    fetchAccessToken(password)
      .then((response: AuthenticationResponse) => {
        this.setState({inProgress: false, serverError: null});
        this.props.onObtainAccessToken(response.access_token)
      })
      .catch((error: Error) => {
        this.setState({inProgress: false, serverError: error})
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { serverError } = this.state;
    const errorText = serverError && isApiError(serverError) && serverError.status === 400 ?
      `Your password was incorrect. You can find your password in your invite - if you've lost it, get in touch with us.` :
      `Something went wrong when trying to log in - I've probably broken the website :(. Try again, if it keeps happening then let us know.`;
    return (
    <div className="Login">
      <WeddingSection>
        <div className="login-section">
          <div className="content">
            <SectionTitle title="Harriet and Charles's wedding" />
            <div className="info-text">
              {serverError == null ? `Please log in using the password from your invite. If you've lost your password, get in touch with us.` :
                <ErrorText>{errorText}</ErrorText>}
            </div>
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('password', {rules: [{ required: true, message: 'Please enter a password' }]})(
                  <Input type="password" placeholder="Password" autoFocus size="large" />
                )}
              </FormItem>
              <Button type="primary" size="large" htmlType="submit" className="login-form-button" loading={this.state.inProgress}>
                Log in
              </Button>
            </Form>
          </div>
        </div>
      </WeddingSection>
    </div>
    );
  }
}

export default Form.create<LoginProps>()(Login);
