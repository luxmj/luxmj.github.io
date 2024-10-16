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
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:30',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Synology NAS',
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
      link: 'https://chat.104918.xyz/',
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
      name: '008',
      icon: 'album',
      link: 'https://lucide.dev/',
    },
    {
      id: '9',
      name: '009',
      icon: 'cherry',
      link: 'https://github.com/migueravila/Bento/',
    },
  ],

  // 第二个可以忽略
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
          name: 'Synology Photos',
          link: 'https://ds920.104918.xyz:5443/',
        },
        {
          name: 'Synology Drive',
          link: 'https://ds920.104918.xyz:10003/',
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
          name: 'Video Station',
          link: 'https://ds920.104918.xyz:9008/',
        },
        {
          name: 'Note Station',
          link: 'https://ds920.104918.xyz:9351/',
        },
        {
          name: 'Download Station',
          link: 'https://ds920.104918.xyz:8001/',
        },
      ],
    },
    {
      icon: 'rocket',
      id: '2',
      links: [
        {
          name: 'Synthing',
          link: 'https://ds920.104918.xyz:8385/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
        {
          name: 'Blank',
          link: 'https://ds920.104918.xyz:5001/',
        },
      ],
    },
  ],

  // Second Links Container 这些可以忽略
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
