# Finimize Development Challenge

This repo is intended to be forked and uploaded to your own Github account in
order to form the submission for the challenge. Once cloned, it will give you a basic server with a React app, so you don't have to spend time writing boilerplate code. Feel free to make any changes you wish - the existing code is purely intended to get you going faster.

## Run Instructions

To run the app, `cd` into the project root directory and run `yarn install` & `yarn start`
(install Yarn [here](https://yarnpkg.com/en/docs/install)).

Depending on your environment, you might need to install concurrently / Typescript globally.

There is one basic test written in the client, which you can run by performing
`cd client` and then `yarn test`. If you want to add new client tests you can use Jest.

Mocha has been installed on the server to allow you to create server tests if you wish,
although none have been written yet.

## The challenge

Create a web-app that shows how much you can expect to make from your savings over time.

The app must satisfy the following Acceptance Criteria (ACs):

- It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
- It should display how much the user's initial savings amount will be worth over the next 50 years. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied. There are resources online about calculating compound interest totals - e.g. [Wikipedia](https://en.wikipedia.org/wiki/Compound_interest#Investing:_monthly_deposits)
- All calculations must take place server-side, and all monthly projection data should be returned via an endpoint
- The calculations must be triggered onChange of any input, to give live feedback on the input data. The performance (try the slider) should be reasonable.

### Our Guidance

The challenge should not take any more than 2-3 hours. You do not need to complete the challenge in one go.

These are some qualities we value:

- Well-modularised, robust and clearly-written code
- Maintainability. Another team member should be able to easily work with your code after you've finished.
- Single Responsibility Principle
- A well-organised codebase. You should think about how your codebase might grow as the project becomes more complex.
- Simple, elegant but fun UX

The UI has been started, as well as some simple setup logic on the server. How you connect these and structure logic is up to you! Feel free to make changes to any of the code provided (including the UI) if you wish.

We have chosen to include a basic design system on the client, to give you an idea of how we like to build UIs. For this challenge we have used [Chakra JS](https://chakra-ui.com/docs/getting-started). You can pass in styling props to the components including margins/padding etc like this:

```
// This produces a Box (styled div) with a top margin of 2, padding of 3 and a black background colour.
// Colours and spacing properties are defined in `themes/index.tsx`
<Box mt={2} p={3} bg='black'>
```

Although the API might be relatively straightforward, please try and write the API code as if you were building something more complex. We would like to gain an idea of how you would go about structuring API code.

Other than the above AC, feel free to take the challenge in any direction you feel best showcase your strengths!

**Once complete**, please drop us a brief note (either an email, or in the readme somewhere) explaining:

- How you approached the challenge
- What bits of your solution you like
- What bits of your solution you’d like to improve upon or would develop next

Any images/gifs of the finished product would be helpful too!

### Using AI

We believe a modern developer workflow should make use of the best tools available, so we would encourage you to use AI tools for this challenge - hopefully it saves you some time!

At the time of writing we are using [CursorAI](https://www.cursor.com/). It has a free trial so you're welcome to give it a go if you haven't already tried it.

Bear in mind that when using AI, you are still responsibility for the quality of the output. The same principles mentioned above still apply. And we will still expect to be able to discuss the end solution, so please ensure you're familiar with what's been committed.

### Tooling

The frontend contains some tooling you might be familiar with

#### Typescript

If you like to use Typescript in your workflow, you should get any client warnings/errors appear in your terminal after running `yarn start`.

You can also run the server types using `yarn types`.

We believe strong TS typing will make your code much more robust.

#### Prettier

We believe Prettier makes your life easier! There is an example .prettierrc included in the `frontend` directory - feel free to tweak the settings if you'd prefer.

You might need to give your IDE a nudge to pick the settings up - [here's an example](https://stackoverflow.com/a/58669550/4388938) of how to do that with VS Code

### Project evaluation

### How you approached the challenge ###

I began by designing and implementing the frontend, as this allowed me to visualize the user experience early and understand the kinds of data interactions required. I aimed for a clean, intuitive layout and used the Chakra UI library for styling and layout consistency, particularly to match the existing line graph component. The components were modularized across separate files to keep the codebase maintainable and easier to scale.

For input handling, I opted to use sliders for parameters like deposit amount and interest rate, as they offer an interactive experience with flexible input ranges. This was a design decision that could certainly be refined based on future accessibility or precision requirements.

Once the frontend was scaffolded, I moved to the backend. I structured the server side using Express and organized the logic into controllers, routes, and utility functions. I implemented two endpoints: one to return the full projection history, and another to return a specific projection at a given point in time — this aligned well with the frontend's summary panel design. After the backend was in place, I integrated it into the frontend using appropriate `useEffect` hooks in `App.tsx` to fetch and sync the data.

### What bits of your solution you like ###

I particularly like the ability for users to retrieve projection summaries for specific year/month combinations without crowding the graph — it allows exploration of long-term outcomes beyond the default 50-year timeline. Including the total interest gain was a simple but valuable addition for users wanting insight into compound returns.

I also added a basic level of responsiveness to ensure the layout adapts to different window sizes. While full mobile optimization wasn't feasible within the timeframe, I wanted to demonstrate awareness of responsive and accessible design considerations — something I prioritize in longer-term projects.

### What bits of your solution you’d like to improve upon or would develop next ###

I'd like to build on the accessibility of the interface to meet WCAG 2.2 standards more fully — this would include enhancing keyboard navigation, improving color contrast, and making layout elements more adaptable across devices.

From a technical perspective, I would improve code modularity further. For instance, the compound interest calculation logic could be better abstracted and shared across functions in the backend to reduce duplication. I would also consider adding unit tests for the core financial logic to ensure correctness over time, especially if new features or edge cases are introduced.

Finally, a next logical step would be adding user input validation and perhaps even visual feedback (e.g. tooltips or warnings) to guide user interaction and prevent invalid states.
