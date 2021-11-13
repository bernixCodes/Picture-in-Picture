const videoEl = document.getElementById('video');
const buttonEl = document.getElementById('button')


//prompt user to select a media stream
//using the screen capture api

async function selectMediaStream(){
    try{
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
     videoEl.srcObject = mediaStream;
     videoEl.onloadedmetadata = ()=>{
         videoEl.play()
     }

    }catch(error){
        console.log(error);
    }
}
buttonEl.addEventListener('click', async () => {
    buttonEl.disabled = true;
    await videoEl.requestPictureInPicture();
    buttonEl.disabled = false
})
 

selectMediaStream()