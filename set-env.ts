const fs = require('fs');
// import { writeFile } from 'fs'; if you are using a typescript file

const environmentFile = `export const environment = {
  imgUrl: '${process.env.IMG_URI}',
  apiUrl: '${process.env.API_URI}',
  baseUrl: '${process.env.BASE_URI}',
  production: ${process.env.PRODUCTION}
};
`;

// Generate environment.ts file
fs.writeFile('./src/environments/environment.ts', environmentFile, (err) => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.ts file generated`);
    }
});
