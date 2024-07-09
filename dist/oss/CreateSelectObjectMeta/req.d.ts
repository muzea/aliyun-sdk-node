export interface CreateSelectObjectMetaRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject.png`
     */
    "key": string;
    /**
     * 保存CreateSelectObjectMeta请求的容器。
     */
    "body"?: any;
}
