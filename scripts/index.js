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
    li.appendChild(a);
    ul.appendChild(li);
  }

  parentNode.appendChild(ul);
}