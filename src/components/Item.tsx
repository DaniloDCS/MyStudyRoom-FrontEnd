type ItemProps = {
  text: string;
}

export function Item(props: ItemProps){
  return <li>{props.text}</li>
}