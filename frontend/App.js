import React, { useState } from 'react'

const App = () => {
  const [image, updateImage] = useState('')
  function handleUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'at-the-minute',
        uploadPreset: 'at-the-minute',
        cropping: true
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        updateImage(result.info.secure_url)
      }
    ).open()
  }

  function log() {
    console.log(image)
  }

  return <> 
  <button onClick={handleUpload}>UPLOAD</button>
  <button onClick={log}>log</button>
  
  </> 
}

export default App