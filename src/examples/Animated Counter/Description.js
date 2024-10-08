const heading = 'Infinite Slider'
const content = "Unleash the power of smooth, continuous scrolling with EndlessScroll, the ultimate slider component designed for seamless, looped transitions. Whether horizontal or vertical, this dynamic display keeps your content flowing effortlessly with customizable speed. Perfect for carousels, marquee effects, or any showcase that demands attention."

const propDetails = [
  
    {
     prop: 'Prop',
      type: 'Type',
      default: "Default",
      description: 'Description',
  },
  {
    prop: 'className',
    type: 'String',
    default: '',
    description: 'Optional CSS class for styling the Number.',
  },
    {
      prop: 'from',
      type: 'Number',
      default: '0',
      description: 'Intial Number before animation',
    },
    {
      prop: 'to',
      type: 'Number',
      default: '100',
      description: 'It is a Number after animation finished',
    },
    {
      prop: 'prefix',
      type: 'String',
      default: '',
      description: 'Prefix of a Number',
    },
    {
      prop: 'sufix',
      type: 'String',
      default: '',
      description: 'Sufix of a Number',
    },
    {
      prop: 'toFixedDecimal',
      type: `Number`,
      default: '0',
      description: 'Number of decimal place u want to show',
    }
];
  
export {heading,content,propDetails}