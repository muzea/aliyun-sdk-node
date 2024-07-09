export interface SelectObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * 保存SelectObject请求的容器。
     */
    "body": any;
}
