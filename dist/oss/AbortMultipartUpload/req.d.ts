export interface AbortMultipartUploadRequest {
    /**
     * Bucket名称。
     * @example `oss-example`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * 此次MultipartUpload事件的唯一标识。
     * @example `0004B9895DBBB6E****`
     */
    "uploadId": string;
}
