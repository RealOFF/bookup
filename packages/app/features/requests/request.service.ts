const requests = [
  {
    id: 0,
    start: Date.now(),
    user: {
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
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
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
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
      firstName: 'Mike',
      lastName: 'Brintenburg'
    },
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

export const useRequests = () => {
  return { data: requests }
}

export const useRequest = (id: number) => {
  return { data: requests[id] }
}
