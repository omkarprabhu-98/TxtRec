# Contributing Instructions (Linux Only)

Guide for setting up environment to use project and contributing to it

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

1. Fork the repository to your github account

2. Clone it 

3. Move into the directory  
           
    ```
        cd txtrec
    ```       
3. Install dependencies using 
       
    ```
        npm install
    ``` 
5. Run 

    ```
        npm start
    ```
    and open http://localhost:3000 in your browser 

### Api installations guide 
    
The project functions with the tesseract binary file.
     
If you want to know how I built the binary from source checkout : [Api-Installation](https://github.com/omkarprabhu-98/TxtRec/blob/master/API-INSTALLATION.md)     
    
    
### To be added

Improved image processing for reducing noise and other factors for easy recognition by tesseract-ocr

### Contibuting

* To submit improvements and fixes
    1. Fork the project to your github account
    2. Make modifications locally and push them to the forked repo
    3. Make a pull request
    
* Report issues
    1. point it out in the issue tab 