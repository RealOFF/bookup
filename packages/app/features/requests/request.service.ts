const requests = [
  {
    id: 0,
    start: Date.now(),
    user: {
      id: 1,
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
    socials: [
      {
        type: 'telegram',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://google.com'
      },
      {
        type: 'viber',
        url: 'https://google.com'
      }
    ],
    services: [
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
    ],
    comment: 'Some comment from me. Some comment from me. Some comment from me.'
  },
  {
    id: 1,
    start: Date.now(),
    user: {
      id: 1,
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
    socials: [
      {
        type: 'telegram',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://google.com'
      },
      {
        type: 'viber',
        url: 'https://google.com'
      }
    ],
    services: [
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
    ],
    comment: 'Some comment from me. Some comment from me. Some comment from me.'
  },
  {
    id: 2,
    start: Date.now(),
    user: {
      id: 2,
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
    socials: [
      {
        type: 'telegram',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://google.com'
      },
      {
        type: 'viber',
        url: 'https://google.com'
      }
    ],
    services: [
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
    ],
    comment: 'Some comment from me. Some comment from me. Some comment from me.'
  },
  {
    id: 3,
    start: Date.now(),
    user: {
      id: 2,
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
    socials: [
      {
        type: 'telegram',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://google.com'
      },
      {
        type: 'viber',
        url: 'https://google.com'
      }
    ],
    services: [
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
    ],
    comment: 'Some comment from me. Some comment from me. Some comment from me.'
  },
  {
    id: 4,
    start: Date.now(),
    user: {
      id: 2,
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
    socials: [
      {
        type: 'telegram',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://google.com'
      },
      {
        type: 'viber',
        url: 'https://google.com'
      }
    ],
    services: [
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
      {
        name: 'Some service',
        duration: 60 * 60,
        price: {
          amount: 10,
          currancy: 'USD'
        },
      },
    ],
    comment: 'Some comment from me. Some comment from me. Some comment from me.'
  }
]

type RequestQueryParams = {
  userId: number
}

export const useRequests = (params?: RequestQueryParams) => {

  return {
    data: params?.userId ?
      requests.filter(({ user }) => user.id === params?.userId) :
      requests
  }
}

export const useRequest = (id: number) => {
  return { data: requests[id] }
}
