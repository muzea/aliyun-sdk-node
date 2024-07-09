export interface DeleteAccessPointPublicAccessBlockRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket"?: string;
    /**
     * 接入点名称。
     * @example `ap-01`
     */
    "x-oss-access-point-name"?: string;
}
