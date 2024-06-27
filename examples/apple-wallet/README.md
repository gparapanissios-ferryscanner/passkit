# Getting Started

```
$ npm install
```

1. **Pass.json**
   
    - **Locate the `pass.json` file:**
      - The file is located at `model/boardingPass.pass/pass.json`.
    - **Update the Identifiers:**
      - Open the `pass.json` file using a text editor of your choice.
      - Find the `teamIdentifier` and `passTypeIdentifier` fields.
    - **Replace the current values with the new identifiers:**
    
       ```json
       {
         "passTypeIdentifier" : "pass.<bundle id>",
         "teamIdentifier" : "<your team identifier>",
         "boardingPass": {}
       }
       ```


2. **Certificates**
    - Create a certificate-dedicated folder inside this directory (e.g. `./certs`) to contain everything concerning the certificates.
    - [Full guide to get all the files you need to proceed.](https://github.com/alexandercerutti/passkit-generator/wiki/Generating-Certificates)



```
$ npm run build
```



3. **Drag and drop the .pkpass file onto the Apple mobile simulator**:
    - Open the iOS Simulator, drag and drop the yourPass.pkpass file onto the simulator to preview your pass.

> [!NOTE]  
> Make sure you have the appropriate certificates and identifiers set up in your Apple Developer account. This process requires an active Apple Developer membership. If you need further customization or specific fields for your pass, refer to Apple's [PassKit documentation](https://developer.apple.com/documentation/walletpasses).
