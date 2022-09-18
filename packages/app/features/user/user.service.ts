const clientsMock = [
  {
    firstName: 'Jack',
    lastName: 'Holon',
    phoneNumber: '+123456789',
    image: '',
  },
  {
    firstName: 'Jack1',
    lastName: 'Holon',
    phoneNumber: '+123456789',
    image: '',
  },
  {
    firstName: 'Jack',
    lastName: 'Holon',
    phoneNumber: '+123456789',
    image: '',
  },
  {
    firstName: 'Jack',
    lastName: 'Holon',
    phoneNumber: '+123456789',
    image: '',
  },
  {
    firstName: 'Jack',
    lastName: 'Holon',
    phoneNumber: '+123456789',
    image: '',
  },
]

export const useUsers = () => {
  return { data: clientsMock }
}

export const useUser = (id: number) => {
  return { data: clientsMock[id] }
}