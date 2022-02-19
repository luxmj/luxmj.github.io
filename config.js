// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'luxmj',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!-0303',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'b4e85a1816a47437c0bc5abc78f7c76e', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'zh_cn', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '31.1552',
  defaultLongitude: '121.6420',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '19:00',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/migueravila/Bento/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://lucide.dev/',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: '',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: '',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: '',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: '',
    },
    {
      id: '7',
      name: 'Alarm',
      icon: 'alarm-check',
      link: '',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: '',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: '',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: '',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: '',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: '',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: '',
    },
    {
      id: '7',
      name: 'Figma',
      icon: 'bluetooth',
      link: '',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Blank01',
          link: '',
        },
        {
          name: 'Blank02',
          link: '',
        },
        {
          name: 'Blank03',
          link: '',
        },
        {
          name: 'Blank04',
          link: '',
        },
        {
          name: 'Blank05',
          link: '',
        },
        {
          name: 'Blank06',
          link: '',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Slack',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Slack',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Slack',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
        {
          name: 'Blank',
          link: '',
        },
      ],
    },
  ],
};
