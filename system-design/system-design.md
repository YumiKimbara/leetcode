# Study of System Design

# Book name

educative.io-Grokking-the-System-Design-educative.io.pdf

## System Design Interviews: A step by step guide

試験で下記の要件定義をしっかり行うことが試験成功の鍵

### Requirements clarifications

- since we only have 35-40 minutes to design a (supposedly) large system, we should clarify what parts of the system we will be focusing on.

### System interface definition

- Define what APIs are expected from the system

### Back-of-the-envelope estimation

- estimate the scale of the system such as number of new tweets, How much storage will we need?, What network bandwidth usage are we expecting?

### Defining data model

- Here are Twitter entities
  User: UserID, Name, Email, DoB, CreationData, LastLogin, etc.
  Tweet: TweetID, Content, TweetLocation, NumberOfLikes, TimeStamp, etc.
  UserFollowo: UserdID1, UserID2
  FavoriteTweets: UserID, TweetID, TimeStamp
- Which database system should we use? NoSQL, MySQL or...

### High-level design

- Draw a block diagram with 5-6 boxes representing the core components of our system

### Detailed design

- Dig deeper into two or three components for the further discussion

### Identifying and resolving bottlenecks

- Try to discuss as many bottlenecks as possible and different approaches to mitigate them.

## Designing a URL Shortening service like TinyURL

### Why do we need URL shortening?

- Users are redirected to the original URL when they hit these short links
- http://tinyurl.com/jlg8zpc -> example of shot link

### Requirements and Goals of the System

### Capacity Estimation and Constraints

### System APIs

- We can have SOAP or REST APIs to expose the functionality of our service

### Database Design

- We would need two tables: one for storing information about the URL mappings, and one for the user’s data who created the short link.
- SQL or NoSQL

### Basic System Design and Algorithm

- Thare are two ways to generate a short URLs
- a. Encoding actual URL: We can compute a unique hash (e.g., MD5 or SHA256, etc.) of the given URL. The hash can then be
  encoded for displaying.
- b. Generating keys offline: We can have a standalone Key Generation Service (KGS) that generates random six letter strings
  beforehand and stores them in a database

### Data Partitioning and Replication

- To scale out our DB, we need to partition it so that it can store information about billions of URLs.
