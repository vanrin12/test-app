import moment from 'moment';
const today = new Date();

export const data = {
  calendars: [
    {
      date: moment().format('YYYY-MM-DD'),
      groups: [
        {
          id: 0,
          title: 'Chest day with aim with mr abcddddddddddddddddd',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            },
            {
              info: '10x lb',
              name: 'Todo exercies 2',
              quantity: 1
            }
          ]
        },
        {
          id: 1,
          title: 'container',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: moment(today.setDate(today.getDate() + 1)).format('YYYY-MM-D'),
      groups: [
        {
          id: 0,
          title: 'Container 1',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            },
            {
              info: '10x lb',
              name: 'Todo exercies 2',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: moment(today.setDate(today.getDate() + 2)).format('YYYY-MM-DD'),
      groups: [
        {
          id: 0,
          title: 'container 2',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            },
            {
              info: '10x lb',
              name: 'Todo exercies 2',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: moment(today.setDate(today.getDate() + 3)).format('YYYY-MM-DD'),
      groups: [
        {
          id: 0,
          title: 'Chest day with aim with mr abcddddddddddddddddd',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            },
            {
              info: '10x lb',
              name: 'Todo exercies 2',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: '2020-03-12',
      groups: [
        {
          id: 0,
          title: 'Chest day with aim with mr abcddddddddddddddddd',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            },
            {
              info: '10x lb',
              name: 'Todo exercies 2',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: moment(today.setDate(today.getDate() + 4)).format('YYYY-MM-DD'),
      groups: [
        {
          id: 0,
          title: 'Chest day with aim with mr abcddddddddddddddddd',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            }
          ]
        }
      ]
    },
    {
      date: moment(today.setDate(today.getDate() - 1)).format('YYYY-MM-DD'),
      groups: [
        {
          id: 0,
          title: 'Chest day with aim with mr abcddddddddddddddddd',
          todoList: [
            {
              info: '10x lb',
              name: 'Todo exercies',
              quantity: 1
            }
          ]
        }
      ]
    }
  ]
};
