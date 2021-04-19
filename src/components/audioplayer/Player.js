import React, { useState } from 'react';
import ReactPlayer from "react-player";

import alarm from '../../sounds/alarm.mp3';
import alarm2 from '../../sounds/alarm2.mp3';


  function Player() {  

    const [sound, setSound] = useState('');

    const playlist = [
            { id: 1, soundName: 'Alarm', src: '../../sounds/alarm.mp3' },
            { id: 2, soundName: 'Alarm2', src: '../../sounds/alarm2.mp3' }
          ];
    
    const handleSelectSound = () => {
      setSound(sound)
    };
    
    return (
      <div>
        <ReactPlayer
          url={alarm2}
          width="400px"
          height="50px"
          playing={false}
          controls={true}
          preload="none"
          className="player"
        />

        <div>          
          {playlist.map(listItem => (
            <p onSelect={handleSelectSound} key={listItem.id} > {sound}  {listItem.soundName}</p>
          ))}
        </div>
      </div>
    )
  }   
    
export default Player;


// import React from 'react';
// import ReactPlayer from "react-player";

// import './_audioplayer.scss'
// //import alarm from '../../sounds/alarm.mp3';
// import alarm2 from '../../sounds/alarm2.mp3';
// // import alarm3 from '../../sounds/alarm3.mp3';
// // import alarm4 from '../../sounds/alarm4.mp3';
// // import alarm5 from '../../sounds/alarm5.mp3';
// // import alarm6 from '../../sounds/alarm6.mp3';



//   function Player() {  
//     const playlist = [
//       { id: 1, soundName: 'Alarm2', path: alarm2 },
//       { id: 2, soundName: 'Alarm3' }
//     ];
//     return (
//         <div className="audioplayer-container">
//           <p className="audio-header">MedicMinders audioplayer </p>

         
//           <ReactPlayer
//             url={alarm2}
//             width="400px"
//             height="50px"
//             playing={false}
//             controls={true}
//             preload="none"
//             className="player"
//           />

//           <div>          
//             {playlist.map(listItem => (
//               <p key={listItem.id}> {listItem.soundName} </p>
//             ))}
//           </div>
//         </div>
//       )
//     }   
    
// export default Player;



// class Player extends Component {
//   constructor(props) {
//     super(props);
//     // this.handlePlay = this.handlePlay.bind(this);
//     this.state = {
//       isPlaying: false,
//     };
//     // this.handlePlay();
//   }

//   handlePlay = () => {
//     this.setState({
//       isPlaying: true
      
//     });
//     console.log(isPlaying);
//   };

//   handlePlay = () => {
//     this.setState({
//       isPlaying: true
//     },() => console.log(this.state.isPlaying));
//   };

//   render() {
//     return (
//       <>
//         <ReactPlayer
//           width="400"
//           height="50"
//           url={this.props.url}
//           playing={this.props.isPlaying}
//           type={this.props.name}
//         />
//         <button type="button" onClick={this.handlePlay}>
//           Play
//         </button>
//       </>
//     );
//   }
// }

// export default Player;


    

{/* <div className="audioplayer-container">
<ReactPlayer
        url="https://www.youtube.com/watch?v=ufeuSX6QPBo"
        url={alarm2}
        width="400px"
        height="50px"
        
        playing={false}
        controls={true}
        preload="none"
        className="player"
      /> 

 <ReactPlayer
        url="https://www.youtube.com/watch?v=ufeuSX6QPBo"
        url={alarm3}
        width="400px"
        height="50px"
        playing={false}
        controls={true}
        preload="none"
      /> */}
