const heading = 'AnimatedOnView'
const content = "The AnimateOnView component is designed to trigger animations when an element enters the viewport, creating a smooth, engaging experience as users scroll through the page. It wraps the content inside a div and automatically detects when that content becomes visible on the screen. Once the element enters the viewport, the component activates the animation, whether it's a fade-in, slide, zoom, or any other effect."

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
      default: '',
      description: 'The content to animate when in view.',
    },
    {
      prop: 'animateOnce',
      type: 'Boolean',
      default: 'false',
      description: 'Set to "true" if u want to animate content everytime it comes in view',
    },
    {
      prop: 'amount',
      type: 'Number',
      default: '0.2',
      description: 'The amount of an element that needs to enter the viewport for animation to start',
    },
    {
      prop: 'className',
      type: `String`,
      default: "'w-fit'",
      description: 'Optional! to style the container of content',
    }
];
  
export {heading,content,propDetails}