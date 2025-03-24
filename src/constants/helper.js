
import { PinataSDK } from 'pinata-web3';




export const CA = "0x015F9f8a96cC0A72c7004eD1ab9C9aB6f52dDc68";

const pinata = new PinataSDK({
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYjBhN2IxYS03MzUxLTRhNjgtODQ1YS0yNDhmNDE0ZTEyYWEiLCJlbWFpbCI6ImRvbWluaWNheDUxMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNzExYzg5OGNhMWViMmRmYmUwNGYiLCJzY29wZWRLZXlTZWNyZXQiOiI3ODMwOTk5MmVkOTI2MWYxYmFkNzRlMmVhZDNjYmE1ZGU3Y2U5ZGZlMmU3MjUzZTEwMzU2Zjg4M2YyMzAzZDg4IiwiZXhwIjoxNzc0Mzg1ODgyfQ.XIitOwY0oDNzdUDV70iTJRxYjje6tUvPdjNG-ZB9JBw",
    pinataGateway: 'https://ipfs.io',
});

export const imageURI = async (imageFile) => {
    const upload = await pinata.upload.file(imageFile);
    console.log(upload);
    return `ipfs://${upload.IpfsHash}`;
};

export const tokenURI = async (metadata) => {
    const upload = await pinata.upload.json(metadata);
    console.log(upload);
    return `ipfs://${upload.IpfsHash}`;
};