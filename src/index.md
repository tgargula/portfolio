---
title: Hello there!
layout: base.njk
---

My name is Tomek. Thanks for visiting my site! <b>This page is currently under construction.</b>

## Posts
Check out some recommendations that I have written that are based on my travels!
{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}