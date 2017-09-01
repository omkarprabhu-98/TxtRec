# Txt Rec

Text Recognition

A simple web app with MEAN stack for OCR using Tesseract API

A demo of showing the working can be found here: [Video](https://drive.google.com/file/d/0BxgYOTkSevMEZXc5UjQzQWhHWHM/view?usp=sharing)

This project was earlier Web Ocr but changes were made: removing redundancies and reducing file size

[View Commits](https://github.com/omkarprabhu-98/WebOCR/commits/master) 

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

To contibute to this project checkout: [Contribute](https://github.com/omkarprabhu-98/TxtRec/blob/master/CONTRIBUTING.md)
      
## Limitations
The projects is dependent on the Tesseract API functions
* Best results come if a image of resolution atleast 300dpi is provided
* For better results tesseract converts the image to black and white which may go horribly wrong if the image has different lighting conditions in different parts
* Noise which is variations in color of image can result in lower accuracy
* Position of text in image if not horizontal is almost unreadable to tesseract
    
    