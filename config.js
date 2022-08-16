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
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'b4e85a1816a47437c0bc5abc78f7c76e', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '31.182034',
  defaultLongitude: '121.596296',

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
      name: 'Synology DS920+',
      icon: 'server',
      link: 'https://ds920.104918.xyz:5001/',
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
    {
      id: '8',
      name: 'Alarm',
      icon: 'https://lucide.dev/',
      link: '',
    },
    {
      id: '9',
      name: 'Alarm',
      icon: 'https://github.com/migueravila/Bento/',
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
    {
      id: '8',
      name: 'Alarm',
      icon: 'alarm-check',
      link: '',
    },
    {
      id: '9',
      name: 'Alarm',
      icon: 'alarm-check',
      link: '',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'server',
      id: '1',
      links: [
        {
          name: 'Synology NAS',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Synology Photos',
          link: 'https://ds920.104918.xyz:5443/',
        },
        {
          name: 'Audio Station',
          link: 'https://ds920.104918.xyz:8801/',
        },
        {
          name: 'File Station',
          link: 'https://ds920.104918.xyz:7001/',
        },
        {
          name: 'Synology Drive',
          link: 'https://ds920.104918.xyz:10003/',
        },
        {
          name: 'Video Station',
          link: 'https://ds920.104918.xyz:9008/',
        },
        {
          name: 'Note Station',
          link: 'https://ds920.104918.xyz:9351/',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Blank11',
          link: '',
        },
        {
          name: 'Blank12',
          link: '',
        },
        {
          name: 'Blank13',
          link: '',
        },
        {
          name: 'Blank14',
          link: '',
        },
        {
          name: 'Blank15',
          link: '',
        },
        {
          name: 'Blank16',
          link: '',
        },
        {
          name: 'Blank17',
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
          name: 'Blank11',
          link: '',
        },
        {
          name: 'Blank12',
          link: '',
        },
        {
          name: 'Blank13',
          link: '',
        },
        {
          name: 'Blank14',
          link: '',
        },
        {
          name: 'Blank15',
          link: '',
        },
        {
          name: 'Blank16',
          link: '',
        },
        {
          name: 'Blank17',
          link: '',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Blank11',
          link: '',
        },
        {
          name: 'Blank12',
          link: '',
        },
        {
          name: 'Blank13',
          link: '',
        },
        {
          name: 'Blank14',
          link: '',
        },
        {
          name: 'Blank15',
          link: '',
        },
        {
          name: 'Blank16',
          link: '',
        },
        {
          name: 'Blank17',
          link: '',
        },
      ],
    },
  ],
};
