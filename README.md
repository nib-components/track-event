# track-event

Delegate a listener for the blur() event, on document.

This component is predominantly used to record 'blur' events on form elements. However is flexible enough to be customised.


## Installation

    $ component install nib-components/track-event

## .trackEvent(category, [el, type, capture]);

  The default action is to add an event listener on window.document for the 'blur' event.



  On blur(), send the event ```category``` and properties to ga.

  If the element that has experienced the 'blur' event, we send:

  ```gaq('send', 'event', category, 'blur', 'skipped', 'elementName');```

  otherwise, if its populated, send:

  ```gaq('send', 'event', category, 'blur', 'completed', 'elementName');```


## Example

```js
//default use case

require('track-event')('contact-form');

// optional

var trackEvent = require('track-event');
var form = document.querySelector('.contact-form');
trackEvent('contact-form', form, 'click', false);
// 'Click' vents are scoped to the form element instead of body.
```

## API

### category (required)

The category you wish to record the event for.


	require('track-event')('contact-form');

This will record the event under 'contact-form'.

Default: 'document'

### element (optional)

The element you wish to delegate the event from.

Default: ```window.document```

### type (optional)

The event type. e.g. 'click'.

Default: 'blur'

### capture (optional)

The event capture for the event listener.

Focus and blur events don’t bubble. But they should be captured from the window on downward.

Default: true


## License

  MIT
