# Simple Quiz with JQuery and Firebase

This is a fully data-driven quiz using JQuery.
You can change the questions in the `public/data.js` file. 

Example `public/data.js`:

```javascript
var questions = [
    {
        "q": "Question?",
        "aw1": "Answer 1",
        "aw2": "Answer 2",
        "correct": 0
    },
    {
        "q": "Question2 ?",
        "aw1": "Answer 1",
        "aw2": "Answer 2",
        "correct": 1
    }
]
```
The field `correct` may be 0 or 1, depending if `aw1` or `w2` is correct. 
If both answers should be correct, then just set it to 2.


Licensed under GPLv3. For more information see `LICENSE`.