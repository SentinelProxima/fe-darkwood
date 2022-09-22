const EnemyImage = (props) => {
  const imageArray = [
    {name: "Giant Rat", url: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rat_diabetic.jpg"},
    {name: "Turtle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Green_Sea_Turtle_grazing_seagrass.jpg/1280px-Green_Sea_Turtle_grazing_seagrass.jpg"}
  ]
    if (props.enemy === "None") return;
    for (let i = 0; i < imageArray.length; i++) {
      if (imageArray[i].name === props.enemy) {
        return (
          <img width="400" height="300" src={imageArray[i].url} alt={props.enemy}></img>
        )
      }
    }
}
    
export default EnemyImage;