export interface UploadPartRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 每一个上传的Part都有一个标识它的号码（partNumber）。
     * 取值：1~10000
     * 单个Part的大小限制为100 KB~5 GB。
     * >MultipartUpload事件中除最后一个Part以外，其他Part的大小都要大于或等于100 KB。因不确定是否为最后一个Part，UploadPart接口并不会立即校验上传Part的大小，只有当CompleteMultipartUpload时才会校验。
     * @example `2`
     */
    "partNumber": number;
    /**
     * uploadId用于唯一标识上传的Part属于哪个Object。
     * @example `0004B9895DBBB6EC98E36`
     */
    "uploadId": string;
    /**
     * 请求体。
     * @example `二进制内容`
     */
    "body"?: string;
}
