// for inserting links into text-heavy sections

const linkSections = {
        community: {
          node: document.querySelector('.community'),
          links: 17
        },
        services: {
          node: document.querySelector('.services'),
          links: 21
        },
        discussionForums: {
          node: document.querySelector('.discussion-forums'),
          links: 51
        },
        housing: {
          node: document.querySelector('.housing'),
          links: 10
        },
        forSale: {
          node: document.querySelector('.for-sale'),
          links: 45
        },
        jobs: {
          node: document.querySelector('.jobs'),
          links: 31
        },
        gigs: {
          node: document.querySelector('.gigs'),
          links: 8
        }
      }

for (const section in linkSections) {
  let div = linkSections[section];
  appendLinks(div.node, div.links);
}

function appendLinks(parentNode, val) {
  const ul = document.createElement('ul');

  for (let i = 0; i < val; i++) {
    const li = document.createElement('li'),
          a = document.createElement('a');
    a.href = '#';
    a.innerText = 'link';
    
    if (parentNode.classList.contains('discussion-forums')) {
      a.classList.add('col-4');
    } else if (parentNode.classList.contains('community') ||
               parentNode.classList.contains('services') ||
               parentNode.classList.contains('for-sale') ||
               parentNode.classList.contains('gigs')) {
      a.classList.add('col-6');
    }

    li.appendChild(a);
    ul.appendChild(li);
  }

  parentNode.appendChild(ul);
}