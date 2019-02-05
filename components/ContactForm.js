var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('label', {
          htmlFor: 'Name',
        }, 'Name'),
        React.createElement('input', {
          type: 'text',
          id: 'Name',
          value: this.props.contact.firstName,
        }),
        React.createElement('label', {
          htmlFor: 'Surname',
        }, 'Surname'),
        React.createElement('input', {
          type: 'text',
          id: 'Surname',
          value: this.props.contact.lastName,
        }),
        React.createElement('label', {
          htmlFor: 'Email',
        }, 'Email'),
        React.createElement('input', {
          type: 'email',
          id: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit', className: 'contactBtn'}, "Add to contacts")
      )
    )
  },
})
