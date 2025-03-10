---
title: Hello
subtitle: I am <span class="primary">Tomek</span>. Full-stack engineer.
layout: home.njk
---

# Posts
Check out some recommendations that I have written that are based on my travels!
{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}