import './TextComponent.css';

const TextComponent = (props) => {

 const {size,transform = "capitalize",classes= "",label,isBorderB = false} = props;

  return (
    <p
      class={`text text-${size} text-${transform} ${classes} ${
        isBorderB ? 'border-b' : ''
      }`}
    >
      {label}
    </p>
  )
}

export default TextComponent