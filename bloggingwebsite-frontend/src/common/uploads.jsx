import axios from 'axios';
import React, { useState } from 'react'


// const Upload = () => {
//     const [img, setImg] = useState(null);

 export   const uploadFile = async (img) => {
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset",'images');
        // console.log(data.values);

        try {
            let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
            // let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            let resourceType = 'image';
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

            const res = await axios.post(api, data);
            const { secure_url } = res.data;
            // console.log(secure_url);
            // setImg(null);
            console.log('File Uploaded Successfully');
            return secure_url;
        } catch (error) {
            console.log(error);
        }
    }

// return(
//     <>
//     uploadFile();
//     </>
// )
    
// }

// export default Upload
