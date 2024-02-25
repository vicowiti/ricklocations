# SHAMIRI TEST -  RICK AND MORTY

## DESIGN INSPIRATION
- I decided to go with a simple and clean UI with a subtle Rick and Morty theme. This is considering the volume of data, in characters and Locations, It makes sense not to distract the user and have them engrossed from the get go.


## API SELECTION

- I decided to query the GRAPHQL API instead of the REST one for the project. This is because first, I kind of prefer Graphql due to its conciseness and predictability, quering just the data you need, instead of getting large responses and having to navigate through to isolate the data required.

- The GRAPHQL query system also makes it easier to integrate with typescript, as creation of interfaces and custom types becomes a 
 breeze. Also the Rick and Morty API has a detailed sandbox that is complete with typescript intergration, making it easy ti visualize the kind of data to query.


 ## TIME TAKEN

 - The task took me 5 working days, I would write some bits in the evenings aafter work. Being a Rick and Morty Fan I was motivated to keep at it, Its a fun show!

 ## STACK
 - I used Nextjs, Typescript, tailwind and the Apollo Client to complete the project. The reason for this was because this is the stack that i have used for most of my career. Also it was a good opportunity to use the latest version of Next, that is 14.1 while leveraging the advantages of React, and the speed that Next offers out of the box. I used the Apollo client to handle queries to the Rick and Morty API. The Apollo client being very popular in the community that Facebook's Relay.

 ## DEPLOYMENT
 - I deployed the project on Vercel on the project is live [here](https://ricklocations.vercel.app).
 - Vercel was a no brainer because Nextjs is maintained by Vercel and therefore has first class support for Nextjs. Plus it is also free. It makes it a great asset for applications in staging and testing phases.

 ## NOTES STORAGE
 - Chose to use Local storage to dsave character notes as it is a simpler way, since the applicaton does not have an authentication system yet. A users, notes stay persisted across tabs.


