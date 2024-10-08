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
      prop: 'direction',
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: 'Alignment of slider',
    },
    {
      prop: 'reverse',
      type: 'Boolean',
      default: 'false',
      description: 'direction of slider',
    }
];
  
export { heading, content, propDetails }


// children: React.ReactNode;
//   gap?: number;
//   duration?: number;
//   direction?: 'horizontal' | 'vertical';
//   reverse?: boolean;
//   className?: string;