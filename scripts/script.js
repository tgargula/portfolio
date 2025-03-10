// ToC

const headings = document.querySelectorAll('h2');

const aside = document.querySelector('aside');

const ul = document.createElement('ul');
ul.classList.add('toc');

headings.forEach((heading) => {
    const li = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.textContent = heading.textContent.replace('#', '');
    anchor.href = `#${heading.id}`;
    anchor.classList.add('toc');

    li.appendChild(anchor);
    li.classList.add('toc');
    li.classList.add(`toc-${heading.tagName.toLowerCase()}`);

    ul.appendChild(li);
});

aside.appendChild(ul);
