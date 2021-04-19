// import React, { Component } from "react";
// import Player from "./Player";
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import "./styles.css";
// import alarm2 from '../../sounds/alarm2.mp3';
// import alarm3 from '../../sounds/alarm3.mp3';
// import alarm4 from '../../sounds/alarm4.mp3';
// import alarm5 from '../../sounds/alarm5.mp3';
// import alarm6 from '../../sounds/alarm6.mp3';


// const playlist = [
//   { name: '枝芽', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
//   { name: '自由女神', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
//   { name: '无雨无晴', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
//   { name: '碎片', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
//   { name: '永恒的港湾', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
// ]

// interface PlayListState {
//   currentMusicIndex: number
// }

// class Tracks extends Component<null, PlayListState> {
//   state = {
//     currentMusicIndex: 0,
//   }

//   handleClickPrevious = (): void => {
//     this.setState((prevState) => ({
//       currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
//     }))
//   }

//   handleClickNext = (): void => {
//     this.setState((prevState) => ({
//       currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
//     }))
//   }

//   render(): React.ReactNode {
//     const { currentMusicIndex } = this.state
//     return (
//       <div>
//         <p>currentMusicIndex: {currentMusicIndex}</p>
//         <AudioPlayer
//           autoPlayAfterSrcChange={true}
//           showSkipControls={true}
//           showJumpControls={false}
//           src={playlist[currentMusicIndex].src}
//           onClickPrevious={this.handleClickPrevious}
//           onClickNext={this.handleClickNext}
//         />
//       </div>
//     )
//   }
// }

// export default Tracks;


// const tracklist = [
//   {
//     id: 1,
//     trackUrl :'https://www.youtube.com/watch?v=ufeuSX6QPBo',
//     title: 'a song'
//   },
//   {
//     id: 2,
//     trackUrl:'https://www.youtube.com/watch?v=ufeuSX6QPBo'
      
//   },
//   {
//     id: 3,
//     trackUrl: 'https://www.youtube.com/watch?v=ufeuSX6QPBo'
      
//   }
// ];

// class Tracks extends Component {
//   render() {
//     return (
      
//       <>
//         {tracklist.map((item) => (
//           <Player key={item.id} url={item.trackUrl} type={item.name} />
//         ))}
//       </>
//     );
//   }
// }

// export default Tracks;