<p align="center" >
    <img src="https://user-images.githubusercontent.com/19479358/55590145-1080be00-5700-1.png" width="700"/>
</p>
<p align="center">
<a title='License' href="https://github.com/FaridSafi/react-native-gifted-chat/blob/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
</a>
</p>

# Your Private Blog

built with [Meteor](https://github.com/meteor/meteor) and [React](https://github.com/facebook/react).

## Brief description

This is a small blog page application. This app is a private blog page which means that all the users must register in order to check the blog posts. ( _just like Medium, but with the requirement that you MUST be registered to see content_ ) There are two types of users ( guest and admins ). The admins are able to create/update/delete blog posts and also check all the registered users in the app and the guest are only able to see the blog posts.

## Requirements

- [x] Setup routes of the website.
- [ ] Make a beautiful home page.
- [ ] Integrate _/login_ route into the home page.
- [ ] User should be able to register and login to the app trought the respective routes _/signup_ and _/login_.
- [ ] Users not logged in CAN NOT see blog posts.
- [ ] All Blog posts are shown in the _/blog_ route.
- [ ] Blog posts should have a Title and a Description field.
- [ ] ADMIN user should be able to create, update and delete blog posts using the _/blog_ route.
- [ ] Guest users should not see ADMIN action buttons.
- [ ] A single page with the _/blog/{id}_ should be opened after clicking on a blog post in _/blog_.
- [ ] ADMIN user should be able to manage current users from the _/admin/users_ route.
- [ ] Guest users should not be able to see _/admin/users_ route content (show permission denied).

## Design

By [me](https://github.com/dev-andremonteiro). :bowtie:

## Installation

- Make sure you have meteor [installed](https://www.meteor.com/install).
- Clone this repo `git clone https://github.com/dev-andremonteiro/meteor-react-private-blog.git`
- `cd meteor-react-private-blog`
- `meteor npm install`
- run `meteor` or `meteor run`

## Developer

Andre Monteiro [dev-andremonteiro](https://github.com/dev-andremonteiro)

[Follow me on Twitter](https://twitter.com/DAndremonteiro) :)
