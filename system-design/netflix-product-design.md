# Netflix Product Design

## Video url

- https://www.youtube.com/watch?v=Tu-hZ6lqNtY

## Difference between System design and Product design
its different in terms of the features we are looking for.
Product design take care of the whole features of the application.

## Create a General plans

- general reqs
  - search for movie
  - see short preview
  - and more
- functional reqs
  - support wide range of devices
  - adapt video to network band
  - and more
- application architecture and components
  - figma の wireflame のようなもの。矢印でどのページにいくかなどを記載する。
- data entities
  - dataのタイプを決めるオブジェクトのこと
  - type Movie = {
   id: string;
   previewUrl: URL
   title: string;
   tags: Tag[]
   description?: string;
   episodes?: Episode[];
   rating: number;
   cast: Actor[];
  }
- data api
  - getDashboard(api_key, user_id): DashboardMap
  - searchFormovies(api_key, user_id, query: string, tags: Tag[], pageSize: number): Movie[]
- data store on front-end
  - treeで表したアプリの構造のこと
- optimization
  - Network performance, JavaScript performance, Rendering performance
- accessibility
  - Provide the user with subtitles
  - We want to have color schemas for color blindness etc...

## design system

- typography, Grid System などデザインに関する決まり
