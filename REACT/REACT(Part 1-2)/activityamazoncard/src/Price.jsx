// export default function Price({oldPrice , newPrice}){
//   let oldStyles = {
//     textDecorationLine: 'line-through',
//   }
//   let newStyles = {
//     fontWeight: "bold",
//   }
//   let styles = {
//     backgroundColor: "#e0c367",
//     height : "30px",
//     width: "200px",
//     borderBottomLeftRadius : "14px",
//     borderBottomRightRadius : "14px"
//   }
//     return (
//         <div style={styles}>
//             <span style={oldStyles}>{oldPrice}</span>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <span style={newStyles}>{newPrice}</span>
//         </div>
//     )
// }



export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecoration: 'line-through',
    color: '#888',
  };

  let newStyles = {
    fontWeight: "bold",
    color: "#d32f2f",
    fontSize: "16px",
  };

  let containerStyles = {
    backgroundColor: "#fce4ec",
    padding: "6px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "8px",
  };

  return (
    <div style={containerStyles}>
      <span style={oldStyles}>{oldPrice}</span>
      <span style={newStyles}>{newPrice}</span>
    </div>
  )
}
