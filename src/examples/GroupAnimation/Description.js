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
      prop: 'children',
      type: 'ReactNode',
      default: undefined,
      description: 'The child elements to be animated.',
    },
    {
      prop: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Optional CSS class for styling the wrapper of children.',
    },
    {
      prop: 'effect',
      type: " 'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide' | 'zoom' | 'flip' | 'bounce' | 'rotate' | 'swing''",
      default: "'horizontal'",
      description: 'Alignment of slider',
    },
    {
      prop: 'style',
      type: 'CSS properties',
      default: '',
      description: 'Optional CSS for styling the wrapper of children.',
    }
];
  
export { heading, content, propDetails }