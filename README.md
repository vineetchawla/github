# github API request

### Tasks completed

1. Added the necessary API endpoint.
2. Added docker-compose and dockerfile. Server should start just with "docker-compose up" at localhost:3000
3. Added some sample integration tests for routes and a unit test for helper
4. Added cache support for faster performance

### Route

get github data : POST req => localhost:3000/getGithubData/:page
default values for body : {
per_page = 1,
sort = "stars",
order = "desc",
date = "2019-01-10",
page = 1,
}
