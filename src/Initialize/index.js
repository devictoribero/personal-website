const ApplicationData = {
  author: 'Victor Ribero',
  slogan: 'I am a Frontend developer',
  typed_text: [
    '... who likes to learn',
    '... who likes to share knowledge',
    '... who studies about Clean architecture',
    '... who knows Object-Oriented programming',
    '... who codes with S.O.L.I.D principles',
    '... who wants to practise TDD',
    '... who wants to learn DDD',
    '... who will be a scrum master',
    '... who reads a lot about tech stuff',
  ],
  links: [
    {
      id: 'home',
      path: '/',
      display: 'Home',
    },
    {
      id: 'about',
      path: '/about',
      display: 'About',
    },
    {
      id: 'interests',
      path: '/interests',
      display: 'Interests',
    },
    {
      id: 'books & readings',
      path: '/books-and-readings',
      display: 'Books & readings',
    },
  ],
  socials_media: [
    {
      name: 'twitter',
      url: 'https://twitter.com/js_tureey',
      profile_name: 'js_tureey',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/victorribero/',
      profile_name: 'Victor Ribero',
    },
    {
      name: 'github',
      url: 'https://github.com/tureey',
      profile_name: 'tureey',
    },
  ],
  aboutMe: [
    {
      type: 'text',
      value: 'A passionate, proactive, dedicated individual with an entrepreneurial spirit capable to do whatever.',
    },
    {
      type: 'text',
      value: 'Ethics, goodness, honesty and responsability are the principles I apply to everything. We are responsable of the craft we do.',
    },
    {
      type: 'text',
      value: 'I am interested about all kind off software development, marketing, SEO and economics. The quality of the product is non-negotiable.'
    },
    {
      type: 'quote',
      value: 'My dream is to found a company with ethics that helps the enviroment or underdeveloped countries.',
    },
  ],
  books_and_readings: [
    {
      classification: 'featured',
      data: [
        {
          type: 'books',
          data: [
            {
              name: 'Clean Code',
              displayName: 'Clean code',
              link: 'http://ricardogeek.com/docs/r_clean_code.pdf',
              author: 'Robert C. Martin',
            },
            {
              name: 'Clean architecture',
              displayName: 'Clean architecture',
              link: 'https://www.bookdepository.com/Clean-Architecture-Robert-C-Martin/9780134494166',
              author: 'Robert C. Martin',
            },
            {
              name: 'The pragmatic programmer',
              displayName: 'Clean Code',
              link: 'https://www.nceclusters.no/globalassets/filer/nce/diverse/the-pragmatic-programmer.pdf',
              author: 'Andrew Hunt',
            },
          ]
        },
        {
          type: 'Blogs',
          data: [
            {
              name: 'Martin Fowler',
              displayName: 'Martin Fowler',
              link: 'https://martinfowler.com',
            },
            {
              name: 'Carlos Buenosvinos',
              displayName: 'Carlos Buenosvinos',
              link: 'https://carlosbuenosvinos.com/',
            },
            {
              name: 'CSS-tricks',
              displayName: 'CSS-tricks',
              link: 'https://css-tricks.com/',
            },
          ]
        },
        {
          type: 'Readings',
          data: [
            {
              name: 'Code smell',
              displayName: 'Code smell',
              link: 'https://martinfowler.com',
              author: 'Martin Fowler',
            },
            {
              name: 'Code smell 2',
              displayName: 'Code smell 2',
              link: 'https://sourcemaking.com/refactoring/smells',
            },
            {
              name: 'Hexagonal architecture',
              displayName: 'Hexagonal architecture',
              link: 'http://fideloper.com/hexagonal-architecture',
            },
          ]
        }
      ]
    }
  ]

};

export default ApplicationData;