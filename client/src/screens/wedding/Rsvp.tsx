import * as React from 'react';
import {WeddingSection} from "./components/WeddingSection";
import {SectionTitle} from "./components/SectionTitle";
import { Form, Input, Button, Switch, Radio } from 'antd';
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
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { isSaving, serverError, hasSucceeded } = this.state;


    const formItemLayout = {
      colon: false,
    };

    const isAttending: boolean = getFieldValue('canAttend');

    return (
      <div className="Rsvp" id="Rsvp">
          <div className="rsvp-section">
            <div className="content">
              <SectionTitle title="RSVP"/>
              {!hasSucceeded && <h3 className="info-text">
                Let us know if you'll be coming. Please RSVP by 26th September.
              </h3>
              }
              {!hasSucceeded &&
              <Form className="rsvp-form" onSubmit={this.handleSubmit} hideRequiredMark={true} >
                  {serverError &&
                    <ErrorText>
                      Looks like something went wrong - I've probably broken the website :(. Try again, if it keeps happening then let us know.
                    </ErrorText>
                  }
                  <FormItem {...formItemLayout} label="What's your name(s)?">
                    {getFieldDecorator('name', {rules: [{required: true, message: 'Please enter your name'}, { max: 200 } ]})(
                      <Input />
                    )}
                  </FormItem>
                  <FormItem {...formItemLayout} label="Can you attend?">
                    {getFieldDecorator('canAttend', { rules: [{required: true, message: 'Please say whether you can attend'}] })(
                      <Radio.Group className="attending-radio-group">
                        <Radio.Button className="attending-radio-button" value={true}>I will be attending</Radio.Button>
                        <Radio.Button className="attending-radio-button" value={false}>I won't be attending</Radio.Button>
                      </Radio.Group>
                    )}
                  </FormItem>
                  {isAttending &&
                    <div>
                      <FormItem {...formItemLayout} label="What's your email? We might need to let you know about any updates">
                        {getFieldDecorator('email', {rules: [{required: true, message: 'Please enter your email'}, {max: 200}]})(
                          <Input />
                        )}
                      </FormItem>
                      <FormItem {...formItemLayout} label="Do you have any dietary requirements?">
                        {getFieldDecorator('dietaryRequirements', {rules: [{max: 2000}] })(
                          <Input.TextArea autosize />
                        )}
                      </FormItem>
                      <FormItem {...formItemLayout} label="Please enter any other comments or information for us">
                        {getFieldDecorator('comments', {rules: [{max: 5000}] })(
                          <Input.TextArea autosize={{ minRows: 4 }} />
                        )}
                      </FormItem>
                    </div>
                  }
                  <Button type="primary" htmlType="submit" size="large" className="rsvp-form-button" loading={isSaving}>
                    Confirm
                  </Button>
                </Form>
              }
              {hasSucceeded && isAttending && <div>Thanks! We look forward to seeing you on the day</div>}
              {hasSucceeded && !isAttending && <div>Thanks! Sorry you're not going to be able to make it 😞</div>}
            </div>
          </div>
      </div>
    );
  }
}

export default Form.create<RsvpProps>()(Rsvp);
