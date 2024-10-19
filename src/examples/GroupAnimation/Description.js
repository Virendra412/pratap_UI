const heading = 'Animated Group'
const content = "Elevate your UI by adding smooth, staggered animations to any collection of elements—be it lists, grids, or groups of components. With AnimatedGroup, each child element flows into view with customizable timing and stunning transitions, bringing your interfaces to life effortlessly."
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