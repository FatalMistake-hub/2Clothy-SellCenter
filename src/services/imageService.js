function UploadImage(files,setImageURLs) {
    const Upload = async (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', '2clothy');
        const res = await fetch('https://api.cloudinary.com/v1_1/sacchidananad-utech/image/upload', {
            method: 'POST',
            body: data,
        });
        const files = await res.json();
        setImageURLs(prev=>{
            return [...prev,files.secure_url]
        })
    };
    for (let i = 0; i < files.length; i++) {
        Upload(files[i]);
    }

}

export default UploadImage;
