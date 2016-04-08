import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import Timer from './imports/Timer.jsx';

Meteor.startup(() => {
  render(<Timer startAt={1000000}/>, document.getElementById('timer1'));
});
