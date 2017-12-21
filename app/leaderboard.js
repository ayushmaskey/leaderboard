
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';


export const PlayersList = new Mongo.Collection('players');

//PlayersList not coz export const
//To use PlayersList need to import { PlayersList } from './leaderboard.js'

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function () {
      return PlayersList.find();
    },
    'count': function() {
      return PlayersList.find().count();
    },

  });

  Template.leaderboard.events({
    'click .player': function() {
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
      console.log(Session.get('selectedPlayer'));
    },

    'dblclick .player': function() {
      console.log("double clicked playa");
    },

    'focus': function() {
      console.log("focus");
    },

    'blur': function() {
      console.log("blur");
    },

    'mouseover': function() {
      console.log("mouseover");
    },

    'change': function() {
      console.log("change");

    },

  });
}

if (Meteor.isServer) {
}

