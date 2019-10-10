interface CopyObjectRequest {
    "BucketName": any;
    "ObjectName": any;
    "x-oss-copy-source": any;
    "x-oss-copy-source-if-match"?: any;
    "x-oss-copy-source-if-none-match"?: any;
    "x-oss-copy-source-if-unmodified-since"?: any;
    "x-oss-copy-source-if-modified-since"?: any;
    "x-oss-metadata-directive"?: any;
    "x-oss-server-side-encryption"?: any;
    "x-oss-object-acl"?: any;
}
export { CopyObjectRequest };