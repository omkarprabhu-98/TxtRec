# Txt Rec
A simple web app with MEAN stack for OCR using Tesseract API

This project was earlier Web Ocr but changes were made: removing redundancies and reducing file size

[View Commits](https://github.com/omkarprabhu-98/WebOCR) 

Used from [WebOCR](https://github.com/omkarprabhu-98/WebOCR)
 * Binary file of tesseract
 * frontend code
 * api route '/api/ocr' code
 
### Frontend Tools
* Angular js
* Bootstrap

### Backend Tools
* Node js
* Express js

### Api dependencies
* Tesseract Ocr
* Leptonica
* Node tesseract

### External dependencies 
* glob (node-tesseract)
* uuid (node-tesseract)
* multer (to process form data which is sent to upload images)
* fs   (for deleting uploaded image imfiles)
* jimp (to improve image contrast and greyscale for better readability)

## Usage

### Pre requisites
* Installing nodejs and npm

    ```
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        sudo apt-get install -y nodejs
    ```
* Check whether installed correctly
    
    ``` 
        npm -v
    ```
    It should display a version number eg. $ 3.5.2 

### Steps:
1. Clone the repository

    ```
        git clone https://github.com/omkarprabhu-98/TxtRec.git
    ```
2. Move into the directory  
    
    ```
           cd txtrec
    ```       
3. Install dependencies using 

    ```
        npm install
    ``` 
4. Run 

    ```
        npm start
    ```
   and open http://localhost:3000 in your browser     

## Contributing    
      
## Limitations
The projects is dependent on the Tesseract API functions
* Best results come if a image of resolution atleast 300dpi is provided
* For better results tesseract converts the image to black and white which may go horribly wrong if the image has different lighting conditions in different parts
* Noise which is variations in color of image can result in lower accuracy
* Position of text in image if not horizontal is almost unreadable to tesseract
    
    