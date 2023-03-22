import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const s3Client = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.BUCKET_PUBLIC_KEY,
    secretAccessKey: process.env.BUCKET_PRIVATE_KEY,
  },
});

const uploadFile = async (file) => {
  const { createReadStream, originalname, mimetype } = await file;
  const fileName = uuidv4() + path.extname(originalname);
  const fileStream = createReadStream();
  const uploadParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
    Body: fileStream,
    ContentType: mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    return fileName;
  } catch (err) {
    console.error(err);
  }
};

const deleteFile = async (fileName) => {
  const deleteParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
  };

  try {
    await s3Client.send(new DeleteObjectCommand(deleteParams));
  } catch (err) {
    console.error(err);
  }
};

const getFile = async (fileName) => {
  const getParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
  };

  try {
    const url = await getSignedUrl(s3Client, new GetObjectCommand(getParams));
    return url;
  } catch (err) {
    console.error(err);
  }
};

const awsOperations = {
  uploadFile,
  deleteFile,
  getFile,
};

export default awsOperations;
