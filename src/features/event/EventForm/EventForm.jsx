import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
class EventForm extends Component {
  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onCreateEvent(this.state.event);
  };

  onInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name]= e.target.value ;
    this.setState({ 
      event: newEvent
    });
  };
  render() {
    const { onFormCancel} = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              value={event.title}
              name='title'
              placeholder="Event Title"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input 
              onChange={this.onInputChange}
              value={event.date}
              type="date" name='date' 
              placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input 
              onChange={this.onInputChange}
              value={event.city}
              name='city' 
              placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input 
              onChange={this.onInputChange}
              value={event.venue}
              name='venue' 
              placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input 
              onChange={this.onInputChange}
              value={event.hostedBy}
              name='hostedBy' 
              placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={onFormCancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
