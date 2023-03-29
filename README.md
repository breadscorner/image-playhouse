# Assignment #2 - Mood Jorts

## Notes from Student to Grader

***90. I completed almost all of the requirements. Things I could not get working: local storage***

***Ran out of time to complete undo/redo buttons***

## Introduction

This is your second assignment for grades.

In this assignment, you will demonstrate your ability to make a front-end-only single page app, using the skills of Unit 2.  This assignment has no need to write back-end code, although I've provided a minimalist stub so that you can `npm run dev` if you like (because that's how I prefer to work).

I expect that in this project there will be no need to use any libraries.  If you want to use a library to solve a major problem, don't.  If you want to use a library to improve a triviality, ask me.

You should do all of your work in the `static` directory.  There's some starter HTML+CSS in there already.  You will certainly need to write a lot of JS, and I suggest that you put that code in `app.js`, but if you want to use multiple files or whatever, that's fine too.  You will probably need to edit the CSS, and perhaps also the HTML, although perhaps not.  Either way, everything in that directory is fair game for you.

In particular, we are making a "mood board".  I was going to name it "Jood board", like J for Jeremy, but that name just bothered me, so it's going to be called "Mood Jorts".  Jorts are pretty cool.

(If you can think of an even dumber name than "mood jorts", you're welcome to rename your project.)

## Due Dates

Due Date: **Friday March 17th, 11:59pm**.

That's 11 days of non-Spring-Break time, or 16 days if you include Spring Break.

## Intellectual Honesty

*Same comments as A1:*

You may not use code from other students, you may not read code written by other students for this assignment, and you may not share your code solutions with other students.

You may discuss, in the abstract, approaches to problems, including advice on what web pages were worth consulting.  A rule of thumb is, if you're looking at someone else's code, it's probably not okay, but if you're just talking out loud it's probably okay, and chat over Discord is a grey area.  You may also ask me, your instructor, for help.

You may use code that you find online.  A more traditional professor would require you to cite all sources from which you take code.  I will simply strongly recommend it.  The reason is this: if a few students have the same erroneous code, it looks like intellectual dishonesty, but if it turns out they used the same wrong source, that helps me to understand it as a simple error.  So for that reason, there is a file in this project called sources.txt, into which I recommend you copy the URLs of web pages from which you copy code.

## Grading

*Same comments as A1:*

There are four possible grades for this assignment.  They're like difficulty levels.

* Fail
  * By the way if you fail the assignment then you fail the course.
* Pass (55%)
  * To Pass, you must complete 100% of the requirements listed to Pass.
* Satisfactory (75%)
  * To get a Satisfactory grade, you must complete 100% of the requirements listed for Satisfactory (as well as the requirements for Pass).
* Exemplary (100%)
  * To get an Exemplary grade, you must complete 100% of the requirements listed for Exemplary (as well as the requirements for Satisfactory and Pass).

So all the specific requirements, listed below, are organized according to the difficulty level.

### Lateness

*Same comments as A1:*

The only thing I'll commit to here is that no one will *fail* based on late penalties.  But let's not do anything unreasonable, okay?

Really, just don't be late.  But if you must, you should (a) send an email about when you expect to hand it in (though I may not reply), and (b) keep working as hard as you can to minimize the lateness.

## Requirements, organized by Grade

### PASS

For this level, the web-app must be in a state to demo, to impress a client.

* Header
  * There must be a header.  The header must contain a name, and an "Add Image" button.  Mine also contains a settings icon, that's optional.
    * My settings icon doesn't *do* anything, I just think it looks better.
  * The Add Image icon must open a form, with an input available to put in a URL, and buttons to Confirm (or Add) and Cancel
    * This dialog must not be hidden behind other UI elements
    * This dialog must do nothing if the input is empty and the Add button is pressed
    * When an image is added, create a new card and add it to the end of the list of cards
* Main view
  * The main part of the page must contain zero or more cards.
    * It may start empty, but ideally you would random-seed with a few sample images.
      * If you do random-seed, it should be clear in your code how I would comment out that section.
  * Each card is the host for an image, and in normal view the card displays only the image, with no other UI elements
  * Cards are displayed in a particular order, and initially they are displayed in the order they are added
* Cards
  * When not in editing mode, a card shows only its image
  * Clicking on a card will toggle it to or from editing mode
    * Also toggling one card to editing mode takes all other cards out of editing mode.
  * When in editing mode, a card shows the image at a smaller size, plus some editing buttons
    * there's a delete button
      * I really should have designed and implemented some system for confirming deletion, maybe you'd like to do a better job than me on this
    * there are two buttons to move the card earlier or later in the order
    * there are two buttons to increase or decrease the size of the card
  * cards must have some type of "size" property, which can be varied (as mentioned above)
    * in my implementation, this size property is in multiples of 30px
      * if varying this slightly allows you to make a nice-looking app, that's fine, but don't stray too far
    * there should be lower and upper bounds on how small or large a card can get (in my case, 60px to 270px)
  * all button functionality must be implemented with delegates, so that there are not hundreds of active event listeners
    * my solution has 7 event listeners at the PASS level, but the exact number isn't important
    * but if I add ten more pictures, and that adds 50 more listeners, that's not okay
* CSS
  * Your CSS must be at least as nice as mine.  This isn't really a class on CSS, but I know you all passed a class on CSS, and I know that you will be required to do CSS in the future, so...  
    * When making the demo version of this, I spent more time on CSS than on everything else put together.  You may find yourself doing the same.  That's normal.  Some people say CSS isn't as "hard" as JS, and there's some truth to that, but it's not easy either, and it can be a fair bit of work.

So, in short, you must be able to

* add images
* resize images
* move images
* delete images

That will require you to

* select DOM nodes
* create DOM nodes
* modify DOM nodes
* delete DOM nodes

#### Code organization

*Same comments as A1:*

I expect your code to be perfectly readable, e.g. perfect indentation, perfect spacing, etc.  "Format Document" is built right into VS Code, and other editors have similar options.  I will overlook one or two errors, but not many.

I expect your variable names to be vaguely reasonable.  An example of unreasonable is a variable with a name that is lies about what's in it (e.g. the variable is called `post` but it always contains an array of multiple posts, or a variable called `post_id` that contains a user ID).  Also unreasonable is a variable that is super vague when there's an obvious less-vague name (e.g. a variable called `info` when there's an obvious better alternative like `post_count` or `user_name`).

In general, I expect you to produce code that, if you were getting paid for it, I wouldn't take one look at it and go "holy hoops this person does not deserve this job".  I guess if you come to me and say "I do not want to be employable" I might grant an exemption on this, I'm just sort of *assuming* that you all want to be employable.

### SATISFACTORY

* absolute-positioned cards
  * add a new button to all cards (visible only in edit mode), that takes them out of the flow of the page, and makes them absolute-positioned
    * absolute-positioned cards should have a z-index above normal cards, but below the pop-over form for adding new cards
    * initially they could be either in the center of the screen, or else some other reasonable place, like maybe where they were before transitioning to absolute-positioning
  * absolute-positioned cards still obey the size rules, and can still be resized somehow
  * absolute-positioned cards no longer have a place in the order, and there should be no weird janky bugs related to this
  * absolute-positioned cards should have a button (in edit mode) to return them to normal flow
    * this puts them at the end of the existing cards
  * absolute-positioned cards can also be moved
    * figure out a nice UI paradigm involving buttons
    * OR, go look at the EXEMPLARY tier
* localStorage
  * every single change made to the page should be recorded in localStorage, so that if I refresh the page, everything returns as it was
    * that includes what images are where, in what order, what size, and in the case of absolutely-positioned cards, where they're positioned
* "clear" and "seed" buttons
  * add two buttons to the header, once called "clear" and one called "seed"
  * the "clear" button removes all cards, and updates localStorage appropriately
  * the "seed" button triggers the seeding behaviour mentioned until PASS->Main, where it creates a few cards without me having to do anything
    * let's say it should create 3 cards, of different sizes, with some different images, ideally in a random order
    * if I click it twice, I should get 6 cards, maybe with the same 3 images repeated, but different sizes

#### Code Organization 2

*Same comments as A1:*

So, you know how back at the Pass grading tier I said I was going to be completely intolerate of bad coding style?  Okay, maybe I exaggerated a bit.  But this time I'm not kidding.  Perfect, please.  You're not getting a grade higher than 55% if it hurts me just to read your code.  Better that I bitch you out than your first boss.

### EXEMPLARY

* keybinds
  * modify the DOM properties so that TAB cycles through the existing cards
    * this does not require JS, except in the sense that you're doing everything with JS in this assignment
      * i.e. there's a way to do this in HTML, and you should use that way
    * add some CSS so that there's a clear way to tell which element is selected
  * create a keybind such that, when a card is currently selected, and this key is pressed, that card goes into Edit mode
    * this is back to normal JS event handling, of course
    * I suggest pressing "e" would be a good keybind for this, unless you have a better idea
  * for a card in edit mode, create keybinds for moving cards left, right, larger, and smaller
    * also normal JS events
    * this should work appropriately for both normal-flow cards and absolute-position cards
    * I suggest "a" and "d" for left and right, and "w" and "s" for larger and smaller, unless you have a better idea
  * also edit-mode cards should be deletable with a key
* undo/redo
  * make all actions possible to be undo-ed and redo-ed
  * you'll add buttons to the header, I guess in the top-right corner, to activate these
    * they should have keybinds too, I guess
  * a limit of 100 undos/redos is reasonable, if you want, or no limit is fine too
  * this should affect adding images, removing images, resizing/moving images, clearing, seeding, and switches to/from absolute positioning
    * I think that's everything, did I miss anything?
* help modal
  * add a button to the header, that looks like a question mark, that when pressed pops up a help modal
  * this help modal should explain everything the user needs to know.... including the keybinds
  * I guess the modal should have a keybind too, like maybe "?"

### BONUS

If there are errors or problems in the way I wrote up this assignment, the first student to identify the issue and communicate it to me may receive a bonus mark, probably 1%, depending on how serious I think the problem is.  First come, first served.
