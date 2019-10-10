interface UploadPartCopyRequest {
    "BucketName": any;
    "ObjectName": any;
    "partNumber": any;
    "uploadId": any;
    "x-oss-copy-source": any;
    "x-oss-copy-source-range"?: any;
    "x-oss-copy-source-if-match"?: any;
    "x-oss-copy-source-if-none-match"?: any;
    "x-oss-copy-source-if-unmodified-since"?: any;
    "x-oss-copy-source-if-modified-since"?: any;
}
export { UploadPartCopyRequest };