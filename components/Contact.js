var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('i', {
          className: 'fas fa-user',
        }),
        React.createElement('p', {className: 'contactName'}, this.props.item.firstName + ' ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email),
      )
    )
  },
});
