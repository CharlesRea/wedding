import * as React from 'react';
import {WeddingSection} from "./components/WeddingSection";
import {SectionTitle} from "./components/SectionTitle";
import { Form, Input, Button } from 'antd';
import {FormComponentProps} from "antd/lib/form/Form";
import './Rsvp.scss';
import {ErrorText} from "./components/ErrorText";
import {sendRsvp} from "../../api";
import {UserDetails} from "../../models/authentication";
import {CreateRsvp} from "../../models/Rsvp";
const FormItem = Form.Item;

type State = {
  serverError: Error | null,
  isSaving: boolean,
  hasSucceeded: boolean
}

type RsvpProps = { user: UserDetails };
type RsvpFormProps = RsvpProps & FormComponentProps;


class Rsvp extends React.Component<RsvpFormProps, State> {
  constructor(props: RsvpFormProps, context: any) {
    super(props, context);
    this.state = {
      serverError: null,
      isSaving: false,
      hasSucceeded: false,
    };
  }

  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.createRsvp(values);
      }
    });
  };

  createRsvp = (rsvp: CreateRsvp) => {
    this.setState({isSaving: true, hasSucceeded: false});
    sendRsvp(rsvp, this.props.user)
      .then(() => {
        this.setState({isSaving: false, serverError: null, hasSucceeded: true});
      })
      .catch((error: Error) => {
        this.setState({isSaving: false, serverError: error})
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isSaving, serverError, hasSucceeded } = this.state;


    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <div className="Rsvp">
        <WeddingSection>
          <SectionTitle title="RSVP"/>
          {!hasSucceeded &&
            <Form className="rsvp-form" onSubmit={this.handleSubmit} hideRequiredMark={true} >
              {serverError &&
              <ErrorText>
                Looks like something went wrong - I've probably broken the website :(. Try again, if it keeps happening then let us know.
              </ErrorText>
              }
              <FormItem {...formItemLayout} label="Your name">
                {getFieldDecorator('name', {rules: [{required: true, message: 'Please enter your name'}]})(
                  <Input placeholder="Your name"/>
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" className="rsvp-form-button" loading={isSaving}>
                Confirm
              </Button>
            </Form>
          }
          {hasSucceeded && <div>Thanks! We look forward to seeing you on the day</div>}
        </WeddingSection>
      </div>
    );
  }
}

export default Form.create<RsvpProps>()(Rsvp);
